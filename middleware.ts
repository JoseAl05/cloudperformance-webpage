import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value
  const pre2fa = req.cookies.get('pre2fa')?.value
  const isAuthenticated = !!token
  const pathname = req.nextUrl.pathname

  const isPublicPath =
    pathname === '/login' ||
    (pathname === '/login/verify' && (pre2fa || isAuthenticated)) ||
    pathname === '/' ||
    pathname.startsWith('/_next')

  if (!isAuthenticated && !isPublicPath) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  if (isAuthenticated && pathname === '/login') {
    return NextResponse.redirect(new URL('/home', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
