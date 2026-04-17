import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json({ limit: '100kb' }))

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

// Tiny in-memory rate limit: 5 submissions per IP per 10 min
const hits = new Map()
const WINDOW_MS = 10 * 60 * 1000
const MAX_HITS = 5

function rateLimited(ip) {
  const now = Date.now()
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS)
  if (arr.length >= MAX_HITS) return true
  arr.push(now)
  hits.set(ip, arr)
  return false
}

app.post('/api/contact', async (req, res) => {
  const ip = req.headers['x-forwarded-for']?.toString().split(',')[0] || req.ip
  if (rateLimited(ip)) {
    return res.status(429).json({ success: false, message: 'Too many requests — please try again later.' })
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
})

app.get('/api/health', (_req, res) => res.json({ ok: true }))

// Serve the built Vite app whenever dist/ exists (single Render service)
const distPath = path.join(__dirname, '..', 'dist')
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get(/.*/, (_req, res) => res.sendFile(path.join(distPath, 'index.html')))
}

function escapeHtml(s = '') {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

app.listen(PORT, () => {
  console.log(`api listening on :${PORT}`)
})
