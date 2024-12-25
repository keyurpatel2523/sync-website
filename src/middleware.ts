import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const validLocale = "en";

const intlMiddleware = createMiddleware({
  locales: ["en"],
  defaultLocale: "en",
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const pathnameSegments = pathname.split("/").filter(Boolean);
  const currentLocale = pathnameSegments[0];

  if (currentLocale !== validLocale) {
    const adjustedPath = pathnameSegments.slice(1).join("/");
    const redirectUrl = new URL(req.nextUrl.origin);
    redirectUrl.pathname = `/${validLocale}/${adjustedPath}`;

    return NextResponse.redirect(redirectUrl, 307);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
