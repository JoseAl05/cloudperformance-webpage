import { NextApiRequest, NextApiResponse } from 'next'
import { getClient } from '@/lib/mongo'
import bcrypt from 'bcryptjs'
import { transporter } from '@/lib/mail'
import { serialize } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body
  const client = await getClient()
  const user = await client.db('login_db').collection('users').findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' })
  }

  // Generar OTP
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  await client.db('login_db').collection('users').updateOne({ email }, { $set: { otp } })

  // Enviar email con OTP
  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Tu código de verificación 2FA en CloudPerformance',
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.5;">
        <h2 style="color: #0d9488;">Hola,</h2>
        <p>Has solicitado iniciar sesión en <strong>CloudPerformance</strong>.</p>
        <p>Tu código de verificación de 6 dígitos es:</p>
        <div style="font-size: 2rem; font-weight: bold; color: #0284c7; letter-spacing: 0.2em; margin: 20px 0;">
          ${otp}
        </div>
        <p>Este código es válido por 5 minutos. No lo compartas con nadie.</p>
        <p>Si no solicitaste este código, por favor ignora este correo.</p>
        <hr style="border:none; border-top: 1px solid #eee; margin: 20px 0;">
        <p style="font-size: 0.9rem; color: #666;">Gracias por confiar en <strong>CloudPerformance</strong>.</p>
      </div>
    `,
  })

  // Setear cookie temporal pre2fa para permitir acceso a /login/verify
  res.setHeader('Set-Cookie', serialize('pre2fa', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 5 * 60, // 5 minutos
  }))

  return res.status(200).json({ requires2FA: true })
}
