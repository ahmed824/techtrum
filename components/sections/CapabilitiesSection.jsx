import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
  
export function CapabilitiesSection({ t }) {
  const capabilities = [
    {
      icon: "/icons/telecommunications.svg",
      title: t("capabilities.telecom"),
      details: t("capabilities.details"),
    },
    {
      icon: "/icons/digital-transformation.svg",
      title: t("capabilities.digital"),
      details: t("capabilities.details"),
    },
    {
      icon: "/icons/emerging-tech.svg",
      title: t("capabilities.emerging"),
      details: t("capabilities.details"),
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Top Badge */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
            {t("capabilities.badge") || "Design For The Future"}
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-16 max-w-4xl mx-auto">
          {t("capabilities.title") || "Techtrum Capabilities"}
        </h2>
      </div>

      {/* 3 Centered Cards */}
      <div className="container mx-auto px-4 z-10 relative">
        {/* Lamp Image - Top Left of Cards */}
        <div className="absolute -top-30 left-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-32 lg:h-24 pointer-events-none hidden lg:block z-10">
          <Image
            src="/lamp.png"
            alt="Innovation lamp"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-[10px] p-8 border border-[#CACACA] flex flex-col items-center text-center custom-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon */}
              <div className="mb-9">
                <Image
                  src={cap.icon}
                  alt=""
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>

              {/* Title */}
              <h3 className="text-black font-light text-lg sm:text-2xl mb-[84px]">
                {cap.title}
              </h3>

              {/* Details Link */}
              <Link
                href="#"
                className="text-[#236BFD] text-2xl font-light flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                {cap.details}
                <FaArrowRightLong className="text-lg font-light" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Pattern Image - Bottom Left, 500px */}
      <div className="absolute z-0 -bottom-16 left-0 w-[500px] h-[500px] pointer-events-none opacity-85 hidden lg:block">
        <Image
          src="/pattern.png"
          alt="Decorative pattern"
          fill
          className="object-contain object-bottom object-left"
          priority
        />
      </div>
    </section>
  );
}
