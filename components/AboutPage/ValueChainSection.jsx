"use client";
import Image from "next/image";

export function ValueChainSection({ t }) {
  const items = [
    {
      id: 1,
      title: t("valueChains.partnership.title"),
      description: t("valueChains.partnership.description"),
    },
    {
      id: 2,
      title: t("valueChains.design.title"),
      description: t("valueChains.design.description"),
    },
    {
      id: 3,
      title: t("valueChains.simulation.title"),
      description: t("valueChains.simulation.description"),
    },
    {
      id: 4,
      title: t("valueChains.innovation.title"),
      description: t("valueChains.innovation.description"),
    },
    {
      id: 5,
      title: t("valueChains.sustainability.title"),
      description: t("valueChains.sustainability.description"),
    },
  ];

  return (
    <section
      className="py-20 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-block bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
            {t("services.badge") || "Values"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-black mb-4 max-w-4xl mx-auto">
          {t("services.title")}
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-600 text-sm sm:text-base max-w-3xl mx-auto mb-16">
          {t("services.subtitle")}
        </p>

        {/* Value Chains Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-7">
          {items.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-[10px] p-6 border border-[#CACACA] shadow-sm hover:shadow-md transition-shadow"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <h3 className="text-[#12283F] font-bold text-lg sm:text-xl mb-3">{item.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Image */}
      <div className="hidden lg:block absolute bottom-0 left-0 w-full pointer-events-none">
        <Image
          src="/Mask Group 39.png"
          alt="Value Chain Background"
          width={1920}
          height={400}
          className="w-full h-auto object-cover object-top"
          priority
        />
      </div>
    </section>
  );
}
