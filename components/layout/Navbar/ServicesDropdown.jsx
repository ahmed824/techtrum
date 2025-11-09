"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { classNames } from "@/utils/classNames";
import { useIsRTL } from "@/utils/useIsRTL";
import { usePathname } from "next/navigation";

export function ServicesDropdown({
  label,
  activeSection,
  showDropdown,
  setShowDropdown,
  t,
}) {
  const dropdownRef = useRef(null);
  const isRTL = useIsRTL();
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowDropdown]);

  const handleButtonClick = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={handleButtonClick}
        className={classNames(
          "relative flex items-center gap-1 text-[#12283F] font-medium transition hover:text-[#236BFD]",
          isRTL ? "pl-4" : "pr-4",
          activeSection === "services" && "text-[#236BFD]"
        )}
        aria-label={label}
        aria-expanded={showDropdown}
        aria-haspopup="true"
        aria-controls="services-dropdown"
      >
        {label}
        <FaChevronDown
          className={classNames(
            "text-xs transition-transform duration-200",
            showDropdown && "rotate-180"
          )}
          aria-hidden="true"
        />
        {activeSection === "services" && (
          <span
            className={classNames(
              "absolute -bottom-2 w-full h-[6px] bg-[#236BFD]",
              isRTL ? "right-0" : "left-0"
            )}
            aria-hidden="true"
          />
        )}
      </button>

      {showDropdown && (
        <div
          id="services-dropdown"
          role="menu"
          className={classNames(
            "absolute mt-3 w-64 bg-[#111123] border border-gray-700 rounded-xl shadow-lg overflow-hidden z-50 animate-fadeIn",
            isRTL ? "right-0" : "left-0"
          )}
        >
          <Link
            href={`/${currentLang}/service-1`}
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#236BFD] transition"
            role="menuitem"
            aria-label={t("services.service1")}
          >
            {t("services.service1")}
          </Link>
          <Link
            href={`/${currentLang}/service-2`}
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#236BFD] transition"
            role="menuitem"
            aria-label={t("services.service2")}
          >
            {t("services.service2")}
          </Link>
          <Link
            href={`/${currentLang}/service-3`}
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#236BFD] transition"
            role="menuitem"
            aria-label={t("services.service3")}
          >
            {t("services.service3")}
          </Link>
          <Link
            href={`/${currentLang}/service-4`}
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#236BFD] transition"
            role="menuitem"
            aria-label={t("services.service4")}
          >
            {t("services.service4")}
          </Link>
          <Link
            href={`/${currentLang}/service-5`}
            onClick={handleLinkClick}
            className="block px-4 py-3 text-white hover:bg-[#236BFD] transition"
            role="menuitem"
            aria-label={t("services.service5")}
          >
            {t("services.service5")}
          </Link>
        </div>
      )}
    </div>
  );
}