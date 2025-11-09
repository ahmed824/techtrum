"use client";

import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export function TopBar() {
  const { t } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = (() => {
    const seg = pathname.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  const switchLang = (lng) => {
    if (!pathname) return;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${lng}`);
      return;
    }
    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = lng;
    } else {
      segments.unshift(lng);
    }
    const newPath = "/" + segments.join("/");
    router.push(newPath);
  };
  return (
    <div className="bg-[#12283F] relative z-10 text-white py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-3 md:gap-0">
        {/* Left side — phone and email */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-2">
            <FaPhone className="text-[#246BFD]" />
            <span suppressHydrationWarning>{t("topBar.phone", { defaultValue: "0539669980" })}</span>
          </div>
          <span className="hidden md:block w-px h-5 bg-gray-600" />
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#246BFD]" />
            <span suppressHydrationWarning>{t("topBar.email", { defaultValue: "info@fixerfm.com" })}</span>
          </div>
        </div>

        {/* Right side — social icons + language */}
        <div className="flex items-center gap-4">
          {/* Social icons (hidden on small screens) */}
          <div className="hidden md:flex gap-3" role="list" aria-label="روابط وسائل التواصل الاجتماعي">
            <a
              role="listitem"
              href="#"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF aria-hidden="true" />
            </a>
            <a
              role="listitem"
              href="#"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-hidden="true" />
            </a>
            <a
              role="listitem"
              href="#"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter aria-hidden="true" />
            </a>
            <a
              role="listitem"
              href="#"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>


          {/* Language switcher — always visible */}
          <div className="flex gap-2 md:ml-6 text-center md:text-left" role="group" aria-label="Language switcher">
            <button
              type="button"
              onClick={() => switchLang("ar")}
              className={
                currentLang === "ar"
                  ? "text-[#246BFD]"
                  : "opacity-90 hover:opacity-100"
              }
              aria-label={t("topBar.arabic", { defaultValue: "Arabic" })}
              aria-pressed={currentLang === "ar"}
            >
              {t("topBar.arabic", { defaultValue: "Arabic" })}
            </button>
            <span aria-hidden="true">|</span>
            <button
              type="button"
              onClick={() => switchLang("en")}
              className={
                currentLang === "en"
                  ? "text-[#246BFD]"
                  : "opacity-90 hover:opacity-100"
              }
              aria-label={t("topBar.english", { defaultValue: "English" })}
              aria-pressed={currentLang === "en"}
            >
              {t("topBar.english", { defaultValue: "English" })}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
