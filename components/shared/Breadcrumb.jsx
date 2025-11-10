import React from "react";
import Image from "next/image";

export default function BreadcrumbHero({
  title,
  subtitle,
  subtitleImage,
  t,
  titleKey,
}) {
  return (
    <section
      className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/Mask Group 34.png')",
      }}
    >
      {/* Optional: Preload background image for better LCP */}
      <link
        rel="preload"
        as="image"
        href="/Mask Group 34.png"
        // Optional: add media query for responsive backgrounds if needed
      />

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center space-y-2 sm:space-y-3">
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-black px-2">
            {t
              ? titleKey
                ? t(titleKey)
                : title || "About us"
              : title || "About us"}
          </h1>

          {/* Blue Underline */}
          <div className="flex justify-center">
            <div className="w-20 sm:w-24 md:w-32 h-3 sm:h-3.5 md:h-4 bg-[#236BFD] rounded-full"></div>
          </div>

          {/* Optional Subtitle with Image */}
          {subtitle && (
            <div className="flex items-end justify-center gap-2 sm:gap-3 max-w-2xl mx-auto px-4">
              {subtitleImage && (
                <div className="relative w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] md:w-[58px] md:h-[58px] flex-shrink-0">
                  <Image
                    src={subtitleImage}
                    alt="Subtitle icon"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 58px"
                    priority // Since it's in hero section
                  />
                </div>
              )}
              <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                {subtitle}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
