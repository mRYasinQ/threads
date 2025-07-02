import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';

export default async function middleware(req: NextRequest): Promise<NextResponse> {
    const pathname = req.nextUrl.pathname;
    const cookie = req.cookies;

    const userId = cookie.get('userId');
    const isAuthenticated = Boolean(userId);

    if (pathname === '/login' || pathname === '/register') {
        if (isAuthenticated) return NextResponse.redirect(new URL('/', req.url));
    }

    if (pathname === '/post/new') {
        if (!isAuthenticated) return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}
