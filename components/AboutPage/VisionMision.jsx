"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function VisionMisionSection() {
  const { t } = useTranslation();

  const values = [
    {
      icon: "/icons/integrity.svg",
      title: t("values.integrity") || "Integrity",
    },
    {
      icon: "/icons/diversity.svg",
      title: t("values.diversity") || "Diversity",
    },
    {
      icon: "/icons/transparency.svg",
      title: t("values.transparency") || "Transparency",
    },
    {
      icon: "/icons/professionalism.svg",
      title: t("values.professionalism") || "Professionalism",
    },
  ];

  return (
    <section className="pt-20 md:pt-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Vision & Mission - Two Columns with Shadow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24">
          {/* Vision Card */}
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-50"
            data-aos="fade-up"
          >
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-sm">
                <Image
                  src="/icons/vision.svg"
                  alt="Vision"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#246BFD] mb-4 text-center md:text-left">
              {t("vision.title") || "Vision"}
            </h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              {t("vision.text") ||
                "Being the best option for enterprises in maximizing the benefit of technology solutions by employing capabilities in emerging technologies to achieve their goals."}
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-50"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center md:justify-start mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-sm">
                <Image
                  src="/icons/mission.svg"
                  alt="Mission"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#246BFD] mb-4 text-center md:text-left">
              {t("mission.title") || "Mission"}
            </h3>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              {t("mission.text") ||
                "To innovate ideas and solutions to improve business efficiency and increase productivity to achieve environmental, social and governance sustainability."}
            </p>
          </div>
        </div>

        {/* Values Section with Shadow Card */}
        <div className="max-w-4xl mx-auto">
          <div
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-50"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-center mb-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center shadow-sm">
                  <Image
                    src="/icons/values.svg"
                    alt="Values"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#246BFD] mb-4">
                {t("values.title") || "Values"}
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                {t("values.text") ||
                  "Our technology consulting services are diverse to guide businesses in a professional manner"}
              </p>
            </div>

            {/* Values Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group"
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <Image
                      src={value.icon}
                      alt={value.title}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm md:text-base font-medium text-[#12283F] group-hover:text-[#236BFD] transition-colors">
                    {value.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
