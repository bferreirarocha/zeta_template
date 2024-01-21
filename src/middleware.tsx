import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path.split("/")[1] !== "auth" && !request.cookies.has("token")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (path.split("/")[1] === "auth" && request.cookies.has("token")) {
    return NextResponse.redirect(new URL(`/en/dashboard/default`, request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

// "/dashboard/:path*",
// "/widgets/:path*",
// "/project/:path*",
// "/ecommerce/:path*",
// "/filemanager",
// "/email/:path*",
// "/chat/:path*",
// "/users/:path*",
// "/calendar/:path*",
// "/bookmarks",
// "/contacts",
// "/tasks",
// `/socialapp`,
// `/todo`,
// `/searchresult`,
// `/formcontrol/:path*`,
// `/formwidget/:path*`,
// `/formlayout/:path*`,
// `/tables/:path*`,
// `/uikits/:path*`,
// `/bonusui/:path*`,
// `/icons/:path*`,
// `/charts/:path*`,
// "/samplepage",
// `/pages/:path*`,
// `/gallery/:path*`,
// `/blog/:path*`,
// "/faq",
// `/jobsearch/:path*`,
// `/learning/:path*`,
// `/map/:path*`,
// `/editor/:path*`,
// "/knowledgebase/:path*",
// "/supportticket",
