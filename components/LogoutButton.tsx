'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

type LogoutButtonProps = {
  className?: string
}

export default function LogoutButton({ className = '' }: LogoutButtonProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.refresh()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className={`
        flex items-center gap-2 px-4 py-2 rounded-md transition-all
        text-red-600 hover:text-red-800
        ${className}
      `}
      aria-label="Cerrar sesión"
      title="Cerrar sesión"
      type="button"
    >
      <LogOut size={18} />
      Cerrar sesión
    </button>
  )
}
