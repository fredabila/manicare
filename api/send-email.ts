import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

// Read credentials from environment variables
const GMAIL_USER = "manicarehh@gmail.com";
const GMAIL_PASS = "qzwajwwbganozcrn";
const TO_EMAIL = GMAIL_USER;

if (!GMAIL_USER || !GMAIL_PASS) {
  console.warn(
    "GMAIL_USER or GMAIL_PASS not set. send-email function will fail without these."
  );
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  replyTo: GMAIL_USER,
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASS,
  },
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ success: false, error: "Method not allowed" });
    return;
  }

  const { name, phone, email, message, position } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({ success: false, error: "Missing required fields" });
    return;
  }

  // Basic HTML-escape to avoid injection in the email body
  const escapeHtml = (unsafe: string) =>
    String(unsafe)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone || "N/A");
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);
  const safePosition = escapeHtml(position || 'N/A');

  // If a position is provided, use a job-application template; otherwise use the contact template
  const isApplication = position && String(position).trim().length > 0 && String(position).trim().toLowerCase() !== 'n/a';

  const contactHtml = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #0b2a3b;">
    <div style="max-width:600px;margin:0 auto;padding:24px;background:#ffffff;border-radius:12px;border:1px solid #e6eef3;box-shadow:0 6px 18px rgba(11,42,59,0.08);">
      <h2 style="margin:0 0 8px 0;color:#f5b800">New contact form submission</h2>
      <p style="margin:0 0 18px 0;color:#3b5563">You have a new message from your website contact form.</p>

      <table role="presentation" style="width:100%;border-collapse:collapse;margin-top:8px;">
        <tr>
          <td style="padding:8px 0;font-weight:600;width:120px;color:#0b2a3b">Name</td>
          <td style="padding:8px 0;color:#385058">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:600;color:#0b2a3b">Phone</td>
          <td style="padding:8px 0;color:#385058">${safePhone}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:600;color:#0b2a3b">Email</td>
          <td style="padding:8px 0;color:#385058"><a href="mailto:${safeEmail}" style="color:#0b78c1;text-decoration:none">${safeEmail}</a></td>
        </tr>
      </table>

      <div style="margin-top:16px;padding:12px;border-radius:8px;background:#f6fbff;border:1px solid #e6f2fb;color:#12303b;">
        <strong style="display:block;margin-bottom:6px;color:#0b2a3b">Message</strong>
        <div style="white-space:pre-wrap;line-height:1.5;color:#12303b">${safeMessage}</div>
      </div>

      <p style="margin-top:18px;font-size:13px;color:#6b8590">This message was sent from your website contact form. Reply to the user's email to respond directly.</p>
    </div>
    <div style="max-width:600px;margin:18px auto 0 auto;text-align:center;color:#9fb3bd;font-size:12px;">Manicare Home Health</div>
  </div>
  `;

  const applicationHtml = `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: #0b2a3b;">
    <div style="max-width:700px;margin:0 auto;padding:28px;background:#ffffff;border-radius:12px;border:1px solid #e6eef3;box-shadow:0 8px 24px rgba(11,42,59,0.08);">
      <h2 style="margin:0 0 8px 0;color:#0b78c1">New Job Application: ${safePosition}</h2>
      <p style="margin:0 0 18px 0;color:#3b5563">A candidate has applied online for <strong style="color:#0b78c1">${safePosition}</strong>.</p>

      <table role="presentation" style="width:100%;border-collapse:collapse;margin-top:8px;">
        <tr>
          <td style="padding:8px 0;font-weight:700;width:140px;color:#0b2a3b">Candidate</td>
          <td style="padding:8px 0;color:#385058">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:700;color:#0b2a3b">Phone</td>
          <td style="padding:8px 0;color:#385058">${safePhone}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:700;color:#0b2a3b">Email</td>
          <td style="padding:8px 0;color:#385058"><a href="mailto:${safeEmail}" style="color:#0b78c1;text-decoration:none">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-weight:700;color:#0b2a3b">Position</td>
          <td style="padding:8px 0;color:#385058">${safePosition}</td>
        </tr>
      </table>

      <div style="margin-top:18px;padding:14px;border-radius:8px;background:#fff8f0;border:1px solid #ffe6d0;color:#4a2b00;">
        <strong style="display:block;margin-bottom:6px;color:#4a2b00">Candidate Message</strong>
        <div style="white-space:pre-wrap;line-height:1.5;color:#4a2b00">${safeMessage}</div>
      </div>

      <p style="margin-top:18px;font-size:13px;color:#6b8590">Please review this application and follow up directly with the candidate if appropriate.</p>
    </div>
    <div style="max-width:700px;margin:18px auto 0 auto;text-align:center;color:#9fb3bd;font-size:12px;">Manicare Home Health — Recruitment</div>
  </div>
  `;

  const htmlBody = isApplication ? applicationHtml : contactHtml;

  const subject = isApplication
    ? `Job Application: ${safePosition} — ${safeName}`
    : `New contact form submission from ${safeName}`;

  const textFallback = isApplication
    ? `Job Application - ${position}\n\nName: ${name}\nPhone: ${phone || "N/A"}\nEmail: ${email}\nPosition: ${position}\n\nMessage:\n${message}`
    : `Name: ${name}\nPhone: ${phone || "N/A"}\nEmail: ${email}\n\nMessage:\n${message}`;

  const mailOptions: nodemailer.SendMailOptions = {
    from: GMAIL_USER,
    to: TO_EMAIL,
    subject,
    text: textFallback,
    html: htmlBody,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("send-email error:", errMsg);
    res.status(500).json({ success: false, error: errMsg });
  }
}
