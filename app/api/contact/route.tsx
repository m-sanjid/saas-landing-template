import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import nodemailer from "nodemailer";

function required(name: string, value: string | undefined) {
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: required("SMTP_HOST", process.env.SMTP_HOST),
      port: Number(required("SMTP_PORT", process.env.SMTP_PORT)),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: required("SMTP_USER", process.env.SMTP_USER),
        pass: required("SMTP_PASS", process.env.SMTP_PASS),
      },
    });

    const to = required("CONTACT_TO", process.env.CONTACT_TO);
    const from =
      process.env.CONTACT_FROM ||
      `no-reply@${new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost").hostname}`;

    const info = await transporter.sendMail({
      from,
      to,
      subject: `New contact form submission from ${name}`,
      replyTo: email,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, id: info.messageId });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 },
    );
  }
}
