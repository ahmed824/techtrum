"use client";

import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
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
        {/* Left side — Contact Info */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          {/* Website */}
          <div className="flex items-center gap-2">
            <FaGlobe className="text-[#246BFD]" />
            <a
              href="https://www.Techtrum.net"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#246BFD] transition"
              suppressHydrationWarning
            >
              www.Techtrum.net
            </a>
          </div>

          <span className="hidden md:block w-px h-5 bg-gray-600" />

          {/* Phone 1 */}
          <div className="flex items-center gap-2">
            <FaPhone className="text-[#246BFD]" />
            <a
              href="tel:+966554442151"
              className="hover:text-[#246BFD] transition"
              suppressHydrationWarning
            >
              +966 55 444 2151
            </a>
          </div>

          <span className="hidden md:block w-px h-5 bg-gray-600" />

          {/* Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#246BFD]" />
            <a
              href="mailto:Info@Techtrum.net"
              className="hover:text-[#246BFD] transition"
              suppressHydrationWarning
            >
              Info@Techtrum.net
            </a>
          </div>
        </div>

        {/* Right side — Social Icons + Language Switcher */}
        <div className="flex items-center gap-4">
          {/* Social Icons (hidden on small screens) */}
          <div
            className="hidden md:flex gap-3"
            role="list"
            aria-label={t("topBar.socialAria", {
              defaultValue: "Social media links",
            })}
          >
            {/* Facebook - MISSING REAL LINK */}
            {/* <a
              role="listitem"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a> */}

            {/* Instagram - MISSING REAL LINK */}
            {/* <a
              role="listitem"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a> */}

            {/* X (Twitter) */}
            <a
              role="listitem"
              href="https://x.com/techtrum_ksa?s=11&t=eztNfcyajtI5kYT9l97_rQ"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="X (Twitter)"
            >
              <SiX aria-hidden="true" />
            </a>

            {/* LinkedIn */}
            <a
              role="listitem"
              href="https://www.linkedin.com/in/techtrum?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hover:text-[#246BFD] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>

          {/* Language Switcher */}
          <div
            className="flex gap-2 md:ml-6 text-center md:text-start"
            role="group"
            aria-label="Language switcher"
          >
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
