import { getClient } from '@/lib/mongo'
import bcrypt from 'bcryptjs'
import { transporter } from '@/lib/mail'
import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'

export async function POST(request: Request) {
  const { email, password } = await request.json()
  const client = await getClient()
  const cookieStore = await cookies();

  const user = await client.db('login_db').collection('users').findOne({ email })

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return Response.json({ error: 'Credenciales inválidas' }, { status: 401 })
  }

  const tokenPayload = {
    userId: user._id.toString(),
    is_aws: user.is_aws || false,
    is_azure: user.is_azure || false,
  }

  const jwtSecret = process.env.JWT_SECRET
  if (!jwtSecret) {
    console.error('Falta la variable de entorno JWT_SECRET')
    return Response.json({ error: 'Error del servidor' }, { status: 500 })
  }

  const token = jwt.sign(tokenPayload, jwtSecret, { expiresIn: '1d' })

  // Guardar OTP temporal para validación 2FA
  const otp = Math.floor(100000 + Math.random() * 900000).toString()
  await client.db('login_db').collection('users').updateOne({ email }, { $set: { otp, token } })

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

  // Cookie temporal que habilita acceso a /login/verify
  cookieStore.set('pre2fa', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 5 * 60,
  })

  return Response.json({ requires2FA: true })
}
