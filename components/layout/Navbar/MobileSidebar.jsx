"use client";
import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { MobileNavLinks } from "./MobileNavLinks";
import { MobileButtons } from "./MobileButtons";
import { useIsRTL } from "@/utils/useIsRTL";

export function MobileSidebar({
  isMenuOpen,
  setIsMenuOpen,
  navLinks,
  activeSection,
  t,
}) {
  const isRTL = useIsRTL();

  if (!isMenuOpen) return null;

  return (
    <div
      id="mobile-menu"
      className={classNames(
        "fixed top-0 h-full w-72 bg-[#12283F] shadow-2xl transform transition-transform duration-300 z-50",
        isRTL
          ? "left-0 border-r border-[#246BFD]"
          : "right-0 border-l border-[#246BFD]",
        isMenuOpen
          ? "translate-x-0"
          : isRTL
          ? "-translate-x-full"
          : "translate-x-full"
      )}
      role="dialog"
      aria-modal="true"
      aria-label={t("navbar.menu") || "Navigation menu"}
    >
      {/* Close Button */}
      <div className="flex justify-between items-center px-5 py-4 border-b border-[#246BFD]">
        <div className="relative w-[120px] h-8">
          <Image
            src="/light-logo.svg"
            alt="Fixer Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="text-white text-xl hover:text-[#246BFD] focus:outline-none focus:ring-2 focus:ring-[#246BFD] focus:ring-offset-2 focus:ring-offset-[#12283F]"
          aria-label={t("navbar.closeMenu") || "Close menu"}
          aria-expanded={isMenuOpen}
          tabIndex={0}
        >
          <FaTimes aria-hidden="true" />
        </button>
      </div>

      {/* Mobile Links */}
      <nav aria-label={t("navbar.mobileNavAria", { defaultValue: "Mobile navigation links" })}>
        <MobileNavLinks
          navLinks={navLinks}
          activeSection={activeSection}
          setIsMenuOpen={setIsMenuOpen}
          t={t}
        />
      </nav>

      {/* Mobile Buttons */}
      <div role="group" aria-label={t("navbar.userActionsAria", { defaultValue: "User actions" })}>
        <MobileButtons t={t} />
      </div>
    </div>
  );
}
