import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = { ok: boolean; message ?: string}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') 
        return res.status(405).json({ ok: false, message: 'Method not allow'})
    const { name, email, message } = req.body

    if (!name || !email || !message) 
        return res.status(400).json({ ok: false, message: 'Missing fields'})

    const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `Portfolio contact from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p>From: <b>${name}</b> &lt;${email}&gt;</p><p>${message}</p>`
    })
    return res.status(200).json({ ok: true })
  } catch (err: unknown) {
        if (err instanceof Error)
            return res.status(500).json({ ok: false, message: err.message })
        else 
            return res.status(500).json({ ok: false, message: 'Failed to send email' })
  }
}