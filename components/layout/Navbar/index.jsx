"use client";
import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: t("navbar.home"), href: `/${currentLang}` },
    { id: "about", label: t("navbar.about"), href: `/${currentLang}/about` },
    { id: "services", label: t("navbar.services"), href: `/${currentLang}/service-1` },
    { id: "contact", label: t("navbar.contact"), href: `/${currentLang}/contact` },
  ];

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

        {/* Desktop Navigation */}
        <DesktopNav navLinks={navLinks} activeSection={activeSection} t={t} />

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(true)}
          className="text-white text-2xl lg:hidden hover:text-[#246BFD] focus:outline-none focus:ring-2 focus:ring-[#246BFD] focus:ring-offset-2 focus:ring-offset-[#12283F]"
          aria-label={t("navbar.menu") || "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          tabIndex={0}
        >
          <FaBars aria-hidden="true" />
        </button>
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
