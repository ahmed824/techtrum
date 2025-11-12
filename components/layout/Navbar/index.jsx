"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { DesktopNav } from "./DesktopNav";
import { MobileSidebar } from "./MobileSidebar";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { id: "home", label: t("navbar.home"), href: `/${currentLang}` },
    { id: "about", label: t("navbar.about"), href: `/${currentLang}/about` },
    {
      id: "services",
      label: t("navbar.services"),
      href: `/${currentLang}/service-1`,
    },
    {
      id: "contact",
      label: t("navbar.contact"),
      href: `/${currentLang}/contact`,
    },
  ];

  // Determine active link based on current pathname
  const getActiveLink = () => {
    // Normalize pathname by removing trailing slash
    const normalizedPath =
      pathname?.endsWith("/") && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    // Check exact match first
    const exactMatch = navLinks.find((link) => link.href === normalizedPath);
    if (exactMatch) return exactMatch.id;

    // Check if pathname starts with any link href (for nested routes)
    const partialMatch = navLinks.find((link) => {
      if (link.href === `/${currentLang}`) {
        // For home, only match exact path
        return normalizedPath === `/${currentLang}` || normalizedPath === "/";
      }
      return normalizedPath?.startsWith(link.href);
    });

    return partialMatch?.id || "home";
  };

  const activeSection = getActiveLink();

  return (
    <nav
      className="bg-white relative z-50 "
      aria-label={t("navbar.home") || "Main navigation"}
      role="navigation"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            href={`/${currentLang}`}
            className=""
            aria-label={t("navbar.home")}
            tabIndex={0}
          >
            <Image
              src="/logo.svg"
              alt="Fixer Logo"
              width={166}
              height={44}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        <div className="flex gap-14">
          {/* Desktop Navigation */}
          <DesktopNav navLinks={navLinks} activeSection={activeSection} t={t} />

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="text-[#12283F] text-2xl lg:hidden hover:text-[#246BFD] focus:outline-none focus:ring-2 focus:ring-[#246BFD] focus:ring-offset-2 focus:ring-offset-[#12283F]"
            aria-label={t("navbar.menu") || "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            tabIndex={0}
          >
            <FaBars aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navLinks={navLinks}
        activeSection={activeSection}
        t={t}
      />

      {/* Overlay */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/60 z-40"
          aria-hidden="true"
          role="presentation"
        />
      )}
    </nav>
  );
}
