import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // ✅ Ensure the request body is correctly parsed
    const body = await req.json(); // Parse JSON request body

    const { full_name, email, message } = body;

    if (!full_name || !email || !message) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // ✅ Configure Nodemailer Transport
    const transporter = nodemailer.createTransport({
      host: "smtp.outlook.com", // Change for Outlook/Yahoo
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: "karina.savoie@new-way.ai",
      subject: `New Contact Form Submission`,
      text: `Message from ${first_name} ${last_name}:\n\n${message}`,
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
