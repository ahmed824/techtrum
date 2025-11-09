import React from "react";

export default function BreadcrumbHero({ title, subtitle, t, titleKey }) {
  return (
    <section
      className="relative h-64 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/Mask Group 34.png')",
      }}
    >
      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="text-center space-y-3">
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#12283F]">
            {t
              ? titleKey
                ? t(titleKey)
                : title || "About us"
              : title || "About us"}
          </h1>

          {/* Blue Underline */}
          <div className="flex justify-center">
            <div className="w-16 h-1.5 bg-[#236BFD] rounded-full"></div>
          </div>

          {/* Optional Subtitle */}
          {subtitle && (
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
