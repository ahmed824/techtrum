import Image from "next/image";
 import Link from "next/link";
import { VisionMisionSection } from "./VisionMision";
import { useTranslation } from "react-i18next";

export function AboutSection({ t }) {
  const {i18n} = useTranslation();
  const currentLang = i18n.language;
    return (
    <section className="py-20 md:py-24  bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-[800px] h-[552px] pointer-events-none">
        <Image
          src="/Mask Group 36.png"
          alt=""
          width={800}
          height={552}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Badge - About us */}
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
            {t("whoWeAre.badge")}
          </span>
        </div>

        {/* Section Title - Centered */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-14 max-w-3xl mx-auto">
          {t("whoWeAre.title")}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center" dir={currentLang === "ar" ? "rtl" : "ltr"}>
          {/* Image - Left in LTR, Right in RTL */}
          <div className={`flex justify-center ${currentLang === "ar" ? "lg:justify-start order-2" : "lg:justify-end order-1"}`}>
            <div className="relative">
              {/* Main Image */}
              <Image
                src="/Group 59802.webp"
                alt="Techtrum Consult Team"
                width={686}
                height={514}
                className="w-[686px] lg:max-w-lg h-auto object-cover rounded-2xl z-10"
                priority
              />
            </div>
          </div>

          {/* Text Content - Right in LTR, Left in RTL */}
          <div className={`${currentLang === "ar" ? "lg:text-right order-1" : "lg:text-left order-2"} space-y-6`}>
            <h3 className="text-xl sm:text-2xl font-bold text-[#12283F]">
              {t("whoWeAre.company")}
            </h3>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("whoWeAre.description")}
            </p>
          </div>
        </div>
      </div>

      <VisionMisionSection />

      {/* Full-width Bottom Decorative Image */}
      <div className=" z-0 absolute bottom-6  w-full">
        <Image
          src="/Group 59800.png"
          alt="Decorative bottom element"
          width={1920}
          height={200}
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
