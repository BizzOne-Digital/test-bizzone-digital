"use server";

import { validateContact, type ContactResult } from "@/lib/contact";

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** Email delivery adapter. Uses Resend's HTTP API so no extra dependency is needed. */
async function sendEmail(params: { subject: string; text: string; html: string; replyTo: string }) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      reply_to: params.replyTo,
      subject: params.subject,
      text: params.text,
      html: params.html,
    }),
  });
  if (!res.ok) throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
}

export async function submitContact(formData: FormData): Promise<ContactResult> {
  // Honeypot: real visitors never see or fill this field. Pretend success so bots move on.
  if (String(formData.get("company_website") ?? "").trim()) return { status: "success" };

  const input = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  };
  const errors = validateContact(input);
  if (Object.keys(errors).length) return { status: "invalid", errors };

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL || !process.env.CONTACT_TO_EMAIL) {
    return { status: "not_configured" };
  }

  const name = input.name.trim();
  const email = input.email.trim();
  const message = input.message.trim();

  try {
    await sendEmail({
      subject: `New website inquiry from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}<br><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    return { status: "success" };
  } catch (err) {
    console.error("Contact form delivery failed:", err);
    return { status: "error" };
  }
}
