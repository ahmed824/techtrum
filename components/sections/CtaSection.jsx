import Image from "next/image";

export function CtaSection({ t }) {
  return (
    <section
      className="py-16 sm:pt-20 lg:pt-24 md:pb-48 bg-white relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Left Decorative Image (Normal) */}
      <div className="absolute top-0 -left-72 w-full max-w-[600px] lg:max-w-[800px] h-full pointer-events-none hidden lg:block">
        <Image
          src="/Mask Group 36.png"
          alt="Decorative background"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* Right Decorative Image (Flipped Horizontally) */}
      <div className="absolute top-0 -right-72 w-full max-w-[600px] h-full pointer-events-none hidden lg:block">
        <Image
          src="/Mask Group 36.png"
          alt="Decorative background"
          fill
          className="object-contain object-right scale-x-[-1]"
          priority
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Blue Badge */}
          <div
            className="inline-block mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="inline-block bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
              {t("cta.badge") || "Our Impact"}
            </span>
          </div>

          {/* Main Title */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("cta.title") ||
              "Cultivating innovation, advancement, and success."}
          </h2>

          {/* Description */}
          <p
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-24"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {t("cta.description") ||
              "We are a trusted partner, aiming to create a sustainable impact in what we do at both organizational and personal levels. Our impact comes from our deep understanding of the market needs and the experience we bring to enable our client capture the optimum solutions and values through"}
          </p>

          {/* CTA Button Removed */}
        </div>
      </div>
    </section>
  );
}
