import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campos obrigatórios" }, { status: 400 });
  }

  // TODO: connect an email provider (e.g. Resend) to send the message
  // For now, log to console in development
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ ok: true });
}
