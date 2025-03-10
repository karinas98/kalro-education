import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import "isomorphic-fetch";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      full_name,
      email,
      message,
      "g-recaptcha-response": recaptchaToken,
    } = body;

    if (!full_name || !email || !message || !recaptchaToken) {
      return Response.json(
        { error: "All fields and reCAPTCHA are required." },
        { status: 400 }
      );
    }

    // ✅ Verify reCAPTCHA
    const recaptchaValid = await verifyCaptcha(recaptchaToken);
    if (!recaptchaValid) {
      return Response.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }

    // ✅ Set up Microsoft Graph Client
    const credential = new ClientSecretCredential(
      process.env.AZURE_TENANT_ID,
      process.env.AZURE_CLIENT_ID,
      process.env.AZURE_CLIENT_SECRET
    );

    const client = Client.initWithMiddleware({
      authProvider: {
        getAccessToken: async () => {
          const token = await credential.getToken(
            "https://graph.microsoft.com/.default"
          );
          return token.token;
        },
      },
    });

    // ✅ Send email via Graph API
    await client.api("/users/aubrey@kalro-education.com/sendMail").post({
      message: {
        subject: "New Contact Form Submission",
        body: {
          contentType: "Text",
          content: `You received a new message from ${full_name} (${email}):\n\n${message}`,
        },
        toRecipients: [
          {
            emailAddress: {
              address: "aubrey@kalro-education.com",
            },
          },
        ],
      },
    });

    return Response.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error:", error);
    return Response.json({ error: "Internal server error." }, { status: 500 });
  }
}

// ✅ reCAPTCHA verification function
async function verifyCaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );
  const data = await response.json();
  return data.success && data.score > 0.5;
}
