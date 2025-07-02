'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export const VerifyLogin = () => {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await fetch('/api/auth/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ otp }),
    })
    if (res.ok) {
      router.push('/success')
    } else {
      const data = await res.json()
      setError(data.error || 'Código inválido.')
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mx-auto h-16 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
          <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l8-4-8-4-8 4 8 4zm0 0v8" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Verificación en dos pasos</h2>
        <p className="text-gray-600 mb-6">Ingresa el código de 6 dígitos enviado a tu correo electrónico</p>
        {error && <div className="mb-4 text-red-600 font-medium">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" value={otp} onChange={e => setOtp(e.target.value)} maxLength={6} pattern="[0-9]{6}" required className="w-full px-4 py-3 text-center text-2xl font-mono bg-gray-100 border border-gray-300 rounded-xl" placeholder="000000" />
          <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-4 rounded-xl font-medium">Verificar código</button>
        </form>
      </div>
    </div>
  )
}