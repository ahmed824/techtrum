"use client";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { SiX } from "react-icons/si";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getLangLink = (path) => `/${lang}${path}`;

  return (
    <footer className="bg-[#0A0E26] text-white relative">
      {/* Newsletter Section */}
      <div className="relative -mt-16 sm:-mt-20 lg:-mt-24 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#246BFD] rounded-[10px] p-6 sm:p-8 lg:px-12 lg:py-16 shadow-2xl transform translate-y-[-50%]">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center sm:text-start whitespace-nowrap">
                  {t("footer.newsletterTitle") || "Subscribe To Our Newsletter"}
                </h3>

                <form className="relative w-full">
                  <input
                    type="email"
                    placeholder={
                      t("footer.emailPlaceholder") || "Enter Your Email Address"
                    }
                    className="w-full px-5 py-3 pr-32 rounded-[10px] bg-white text-gray-700 placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-white/30 transition"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-0.5 top-1/2 -translate-y-1/2 bg-[#152F44] text-white px-6 py-1.5 font-light rounded-[8px] text-2xl hover:bg-[#1a1f3a] transition whitespace-nowrap"
                  >
                    {t("footer.send") || "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-3 text-center md:text-start">
            <Link href={getLangLink("/")} className="inline-block">
              <div className="relative w-[214px] h-16 flex justify-center md:justify-start items-center gap-3">
                <Image
                  src="/light-logo.svg"
                  alt="Techtrum Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <p className="text-white text-sm sm:text-base max-w-xs mx-auto md:mx-0 mb-7 leading-relaxed">
              {t("footer.description") ||
                "an engineering consulting firm specialized in providing advisory services to manage"}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center md:justify-start">
              {/* Facebook - MISSING LINK */}
              {/* <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.aria.facebook", { defaultValue: "Facebook" })}
                className="text-gray-300 hover:text-[#236BFD] transition-transform transform hover:scale-110"
              >
                <FaFacebookF className="text-lg" />
              </Link> */}

              {/* Instagram - MISSING LINK */}
              {/* <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.aria.instagram", { defaultValue: "Instagram" })}
                className="text-gray-300 hover:text-[#236BFD] transition-transform transform hover:scale-110"
              >
                <FaInstagram className="text-lg" />
              </Link> */}

              {/* X (Twitter) */}
              <Link
                href="https://x.com/techtrum_ksa?s=11&t=eztNfcyajtI5kYT9l97_rQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.aria.twitter", {
                  defaultValue: "X (Twitter)",
                })}
                className="text-gray-300 hover:text-[#236BFD] transition-transform transform hover:scale-110"
              >
                <SiX className="text-lg" />
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://www.linkedin.com/in/techtrum?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("footer.aria.linkedin", {
                  defaultValue: "LinkedIn",
                })}
                className="text-gray-300 hover:text-[#236BFD] transition-transform transform hover:scale-110"
              >
                <FaLinkedinIn className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-start">
            <h5 className="text-[#236BFD] font-semibold mb-4">
              {t("footer.quickLinks") || "Quick Links"}
            </h5>
            <ul className="space-y-2 text-white">
              <li>
                <Link
                  href={getLangLink("/")}
                  className="hover:text-gray-300 transition"
                >
                  {t("navbar.home") || "Home"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLangLink("/about")}
                  className="hover:text-gray-300 transition"
                >
                  {t("navbar.about") || "About"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLangLink("/service-1")}
                  className="hover:text-gray-300 transition"
                >
                  {t("navbar.services") || "Services"}
                </Link>
              </li>
              <li>
                <Link
                  href={getLangLink("/contact")}
                  className="hover:text-gray-300 transition"
                >
                  {t("navbar.contact") || "Contact us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-start">
            <h5 className="text-[#236BFD] font-semibold mb-4">
              {t("footer.contact") || "Contact"}
            </h5>
            <ul className="space-y-4 text-white">
              {/* Website */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaGlobe className="text-[#236BFD] text-sm" />
                <Link
                  href="https://www.Techtrum.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition text-sm sm:text-base"
                >
                  www.Techtrum.net
                </Link>
              </li>

              {/* Phone 1 */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-[#236BFD] text-sm" />
                <Link
                  href="tel:+966554442151"
                  className="hover:text-gray-300 transition text-sm sm:text-base"
                >
                  +966 55 444 2151
                </Link>
              </li>

              {/* Phone 2 */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-[#236BFD] text-sm" />
                <Link
                  href="tel:+966112175930"
                  className="hover:text-gray-300 transition text-sm sm:text-base"
                >
                  +966 11 217 5930
                </Link>
              </li>

              {/* Phone 3 */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaPhone className="text-[#236BFD] text-sm" />
                <Link
                  href="tel:+966564747203"
                  className="hover:text-gray-300 transition text-sm sm:text-base"
                >
                  +966 56 47 47 203
                </Link>
              </li>

              {/* Email */}
              <li className="flex items-center justify-center md:justify-start gap-3">
                <FaEnvelope className="text-[#236BFD] text-sm" />
                <Link
                  href="mailto:Info@Techtrum.net"
                  className="hover:text-gray-300 transition text-sm sm:text-base"
                >
                  Info@Techtrum.net
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-500 text-sm">
            {t("footer.copyright") || "© 2025 Techtrum. All rights reserved."}
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#236BFD] text-white flex items-center justify-center shadow-lg hover:bg-[#1a54c7] transition z-50"
        aria-label={t("footer.aria.scrollTop", {
          defaultValue: "Scroll to top",
        })}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
}
