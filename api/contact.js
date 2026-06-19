import nodemailer from 'nodemailer'

const {
  GMAIL_USER,
  GMAIL_APP_PASSWORD,
  NOTIFY_EMAIL = GMAIL_USER,
} = process.env

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_APP_PASSWORD,
  },
})

function escapeHtml(s = '') {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  const { name, email, message, botcheck } = req.body || {}
  if (botcheck) return res.json({ success: true }) // silently ignore bots

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Name, email and message are required.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' })
  }
  if (message.length > 5000 || name.length > 200) {
    return res.status(400).json({ success: false, message: 'Message is too long.' })
  }

  try {
    await transporter.sendMail({
      from: `"AA Dev Studio — Website" <${GMAIL_USER}>`,
      to: NOTIFY_EMAIL,
      replyTo: `${name} <${email}>`,
      subject: `New project inquiry from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 560px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #6366f1, #a855f7); color: white; padding: 24px 28px; border-radius: 16px 16px 0 0;">
            <h2 style="margin: 0; font-size: 20px;">New project inquiry</h2>
          </div>
          <div style="padding: 24px 28px; background: #fff; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 16px 16px;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">From</p>
            <p style="margin: 0 0 20px; color: #0f172a; font-size: 15px;"><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Message</p>
            <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>`,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('mail error:', err)
    res.status(500).json({ success: false, message: 'Could not send message — please try again.' })
  }
}
