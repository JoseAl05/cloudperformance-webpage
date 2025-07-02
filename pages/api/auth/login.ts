import { NextApiRequest, NextApiResponse } from 'next'
import { getClient } from '@/lib/mongo'
import bcrypt from 'bcryptjs'
import { transporter } from '@/lib/mail'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { email, password } = req.body
  const client = await getClient()
  const user = await client.db('login_db').collection('users').findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Credenciales inválidas' })
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  await client.db('login_db').collection('users').updateOne({ email }, { $set: { otp } })

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to: email,
    subject: 'Tu código 2FA',
    text: `Tu código de verificación es: ${otp}`,
  })

  res.status(200).json({ success: true })
}
