"use server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { full_name, email, message } = body;

    if (!full_name || !email || !message) {
      return Response.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Setup transporter for Microsoft 365 (Office365)
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Kalro Education Website" <${process.env.EMAIL_USER}>`,
      to: "aubrey@kalro-education.com",
      replyTo: email, // Allow direct replies
      subject: `New message from ${full_name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</h3>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return Response.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error sending email:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
