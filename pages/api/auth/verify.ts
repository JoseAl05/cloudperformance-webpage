import { NextApiRequest, NextApiResponse } from 'next'
import { getClient } from '@/lib/mongo'
import { serialize } from 'cookie'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  const { otp } = req.body
  const client = await getClient()
  const match = await client.db('login_db').collection('users').findOne({ otp })

  if (!match) return res.status(401).json({ error: 'Código inválido' })

  // Limpiar OTP
  await client.db('login_db').collection('users').updateOne({ _id: match._id }, { $unset: { otp: "" } })

  // Borrar cookie temporal pre2fa y crear cookie sesión token
  res.setHeader('Set-Cookie', [
    serialize('pre2fa', '', { path: '/', maxAge: 0 }),
    serialize('token', 'logged_in', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 día
    }),
  ])

  return res.status(200).json({ success: true })
}
