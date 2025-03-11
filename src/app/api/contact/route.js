// src/app/api/contact/route.js
import nodemailer from "nodemailer";

export async function POST(req) {
  const { full_name, email, message } = await req.json();

  // ✅ Configure Nodemailer Transport
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com", // Change for Outlook/Yahoo
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Set up email options
  const mailOptions = {
    from: process.env.EMAIL_USER, // Your Microsoft 365 email
    to: "aubrey@kalro-education.com",
    subject: "New Contact Form Submission",
    html: `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    // Send the email using the Nodemailer transporter
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send email. Please try again." }),
      {
        status: 500,
      }
    );
  }
}
