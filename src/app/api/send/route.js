import { NextResponse } from "next/server";
import { Resend } from "resend";
import { EmailTemplate } from "../../components/ui/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [fromEmail, email],
      subject: "Sap.",
      react: EmailTemplate({
        name: name || "empty",
        email: email || "empty",
        message: message || "empty",
      }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
