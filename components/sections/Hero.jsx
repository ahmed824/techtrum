"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsRTL } from "@/utils/useIsRTL";

// Hero Section Component
export function HeroSection({ t }) {
  const isRTL = useIsRTL();
  const pathname = usePathname();

  // Get current language
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  return (
    <section className="hero bg-[#F1F3FD] relative z-[1] min-h-[500px] md:min-h-[800px] flex items-center">
      <div className="container mx-auto py-24 sm:py-24 lg:py-20 pb-0 relative z-10 w-full">
        <div className="flex flex-col justify-center items-start  max-w-1/2 lg:max-w-[34%]">
          <h1 className="text-[#12283F] text-2xl sm:text-3xl lg:text-[50px] mb-3 lg:mb-4">
            {t("hero.title1")}&nbsp;
            <span className="font-bold">{t("hero.title2")}</span>
            {t("hero.title3")}&nbsp;
            <span className="font-bold">{t("hero.title4")}</span>
          </h1>
          <p className="text-[#707070] text-base sm:text-lg mb-6 lg:mb-8">
            {(() => {
              const w = t("hero.description").split(" ");
              return w.length >= 4 ? (
                <>
                  {w.slice(0, 2).join(" ")}{" "}
                  <strong className="font-bold ">
                    {w.slice(2, 4).join(" ")}
                  </strong>{" "}
                  {w.slice(4).join(" ")}
                </>
              ) : (
                t("hero.description")
              );
            })()}
          </p>

          {/* Get In Touch Link */}
          <Link
            href={`/${currentLang}/contact`}
            className="bg-[#236BFD] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[#12283F] transition shadow-lg focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:ring-offset-2 focus:ring-offset-[#F1F3FD]"
            aria-label={t("navbar.bookVisit")}
          >
            {t("navbar.bookVisit")}
          </Link>
        </div>
      </div>
    </section>
  );
}
