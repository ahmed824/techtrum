// app/proxy.js
import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // ✅ إعادة توجيه المستخدم من "/" إلى "/en" أو "/ar"
  if (pathname === "/") {
    // استخرج اللغة من المتصفح
    const acceptLang = request.headers.get("accept-language") || "";
    const userLang = acceptLang.startsWith("ar") ? "ar" : "en";

    const url = request.nextUrl.clone();
    url.pathname = `/${userLang}`;

    return NextResponse.redirect(url);
  }

  // ✅ السماح بمرور باقي الطلبات بدون تعديل
  return NextResponse.next();
}

// ✅ تحديد المسارات التي سيعمل عليها الـ proxy
export const config = {
  matcher: ["/"], // يعني فقط على الصفحة الرئيسية
};
