import { NextRequest, NextResponse } from 'next/server';
import { config } from './config';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-url', request.url);

  const isAdmin = request.cookies.get('password')?.value === config.adminPassword;
  requestHeaders.set('isAdmin', '' + isAdmin);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
