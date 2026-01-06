import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Prevent infinite loops for internal assets
  if (
    url.pathname.startsWith('/_next') ||
    url.pathname.startsWith('/api') ||
    url.pathname.includes('.') // public files like images
  ) {
    return NextResponse.next();
  }

  // Domain Mapping Strategy
  // 1. Localhost subdomains: xenopus.localhost -> xenopus
  // 2. Production domains: mapped via simple switch/object
  
  let currentHost = hostname.split(':')[0]; // remove port
  let siteName = '';

  // Localhost logic for testing: site.localhost
  if (currentHost.includes('localhost')) {
     const parts = currentHost.split('.');
     if (parts.length > 1 && parts[0] !== 'www') {
       siteName = parts[0];
     } else {
       // Default fallback or main site if accessing localhost directly
       // mostly for debugging, maybe show a landing page or just one of the sites
       // For now, let's default to nothing (Next.js default page) or maybe a specific one?
       // Let's pass through if plain localhost
       return NextResponse.next();
     }
  } else {
    // Production mapping
    // You can extend this mapping as needed
    const domainMap: Record<string, string> = {
      'xenopus.com': 'xenopus',
      'consulxenopus.com': 'xenopus', // from the footer email
      'aterialogistic.com': 'teria', // inferred from email, checking conflict with 'ateria'
      'enerkia22.com': 'enerkia',
      'consultoresjfmark.com': 'jf-mark',
      'mischari.com.mx': 'mishari',
      // Add more real domains here
    };
    
    // Check direct match or www match
    siteName = domainMap[currentHost] || domainMap[currentHost.replace('www.', '')] || '';
  }

  if (siteName) {
    // Rewrite to the internal route
    // /about -> /sites/xenopus/about
    // / -> /sites/xenopus
    url.pathname = `/sites/${siteName}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
