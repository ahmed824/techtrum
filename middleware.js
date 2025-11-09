import { NextResponse } from "next/server";

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // Ignore Next.js internals, API routes, and direct file requests
    if (
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname === "/robots.txt" ||
        pathname === "/sitemap.xml" ||
        pathname === "/favicon.ico" ||
        /\.[a-zA-Z0-9]+$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    const hasLocale = pathname.startsWith("/en") || pathname.startsWith("/ar");
    if (!hasLocale) {
        const url = request.nextUrl.clone();
        url.pathname = `/en${pathname === "/" ? "" : pathname}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: "/:path*",
};