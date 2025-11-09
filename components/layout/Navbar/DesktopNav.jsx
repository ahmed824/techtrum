"use client";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { NavLink } from "./NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DesktopNav({ navLinks, activeSection, t }) {
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  return (
    <>
      {/* Desktop Links - Logical order in navigation */}
      <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation links">
        {navLinks.map(({ id, label, href }) => (
          <NavLink
            key={id}
            href={href}
            label={label}
            isActive={activeSection === id}
          />
        ))}
      </nav>

      {/* Right Buttons - Secondary actions in logical order */}
      <div className="hidden lg:flex items-center gap-3" role="group" aria-label="User actions">
        <Link 
          href={`/${currentLang}/book`}
          className={classNames(
            "bg-[#246BFD] text-white px-6 py-2.5 rounded-full transition font-bold shadow-lg",
            "hover:bg-[#12283F] focus:outline-none focus:ring-2 focus:ring-[#246BFD] focus:ring-offset-2 focus:ring-offset-[#090919]"
          )}
          aria-label={t("navbar.bookVisit")}
          tabIndex={0}
        >
          {t("navbar.bookVisit")}
        </Link>
      </div>
    </>
  );
}