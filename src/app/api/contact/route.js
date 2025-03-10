import { Client } from "@microsoft/microsoft-graph-client";
import { ClientSecretCredential } from "@azure/identity";
import "isomorphic-fetch";

export async function POST(req) {
  try {
    const body = await req.json();
    const { full_name, email, message } = body;

    if (!full_name || !email || !message) {
      return Response.json(
        { error: "All fields and reCAPTCHA are required." },
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
