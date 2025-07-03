// /pages/api/auth/logout.ts
import { serialize } from 'cookie'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()

  // Eliminar la cookie "token", que fue creada en /verify
  res.setHeader('Set-Cookie', serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',     // Debe coincidir
    maxAge: 0,
    sameSite: 'lax',
  }))

  return res.status(200).json({ message: 'Sesión cerrada correctamente' })
}
