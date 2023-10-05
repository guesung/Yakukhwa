import { type NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
const PUBLIC_FILE = /\.(.*)$/;

const middleware = async (request: NextRequest) => {
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(request.nextUrl.pathname)
  ) {
    return;
  }
  /* PC/모바일 기기 대응 */
  const headersList = headers();
  const userAgent = headersList.get("user-agent");
  const isMobileView = !!userAgent!.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  const pathname = request.nextUrl.pathname;
  const isMobileUrl = pathname.includes("/m/");
  if (isMobileView && !isMobileUrl) {
    const mobileUrl = pathname.replace("/", "/m/");
    return NextResponse.redirect(new URL(mobileUrl, request.nextUrl.origin));
  }
  if (!isMobileView && isMobileUrl) {
    const desktopUrl = pathname.replace("/m/", "/");
    return NextResponse.redirect(new URL(desktopUrl, request.nextUrl.origin));
  }
};

const config = {
  matcher: ["/"],
};

export { config, middleware };
