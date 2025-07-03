'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.refresh()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-2 text-red-600 hover:text-red-800 px-3 py-1 rounded-md transition-all"
      aria-label="Cerrar sesión"
      title="Cerrar sesión"
      type="button"
    >
      <LogOut size={18} />
      Cerrar sesión
    </button>
  )
}
