import { getClient } from '@/lib/mongo'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { otp } = await request.json()
  const client = await getClient()
  const cookieStore = await cookies();

  const user = await client.db('login_db').collection('users').findOne({ otp })

  if (!user || !user.token) {
    return Response.json({ error: 'Código inválido' }, { status: 401 })
  }


  await client.db('login_db').collection('users').updateOne(
    { _id: user._id },
    { $unset: { otp: '', token: '' } }
  )

  cookieStore.set('pre2fa', '', { path: '/', maxAge: 0 })

  cookieStore.set('token', user.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24, // 1 día
  })

  return Response.json({ success: true })
}
