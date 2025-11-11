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

  // Custom shadow: #000000 at 14% opacity
  const cardShadow = "0 4px 12px rgba(0, 0, 0, 0.14)";
  const cardShadowHover = "0 8px 24px rgba(0, 0, 0, 0.14)";

  return (
    <section className="pt-20 md:pt-24 relative z-10">
      <div className="container mx-auto px-4">
        {/* Vision & Mission - Two Columns with Shadow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-10">
          {/* Vision Card */}
          <div
            className="bg-white rounded-[10px] p-6 md:p-8 text-center transition-shadow duration-300"
            style={{
              boxShadow: cardShadow,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = cardShadowHover)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = cardShadow)}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-6">
              <div className="w-[100px] h-[100px] rounded-full border border-dashed border-[#246BFD] flex items-center justify-center p-2.5">
                <div className="w-[80px] h-[80px] rounded-full bg-[#ECEFFF] flex items-center justify-center shadow-sm">
                  <Image
                    src="/icons/vision.svg"
                    alt="Vision"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#246BFD] mb-4">
              {t("vision.title") || "Vision"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("vision.text") ||
                "Being the best option for enterprises in maximizing the benefit of technology solutions by employing capabilities in emerging technologies to achieve their goals."}
            </p>
          </div>

          {/* Mission Card */}
          <div
            className="bg-white rounded-[10px] p-6 md:p-8 text-center transition-shadow duration-300"
            style={{
              boxShadow: cardShadow,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow = cardShadowHover)
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = cardShadow)}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="flex justify-center mb-6">
              <div className="w-[100px] h-[100px] rounded-full border border-dashed border-[#246BFD] flex items-center justify-center p-2.5">
                <div className="w-[80px] h-[80px] rounded-full bg-[#ECEFFF] flex items-center justify-center shadow-sm">
                  <Image
                    src="/icons/mission.svg"
                    alt="Mission"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#246BFD] mb-4">
              {t("mission.title") || "Mission"}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {t("mission.text") ||
                "To innovate ideas and solutions to improve business efficiency and increase productivity to achieve environmental, social and governance sustainability."}
            </p>
          </div>
        </div>

        {/* Values Section with Shadow Card */}
        <div
          className="bg-white rounded-[10px]  w-full p-8 md:p-12 text-center transition-shadow duration-300"
          style={{
            boxShadow: cardShadow,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.boxShadow = cardShadowHover)
          }
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = cardShadow)}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="mb-10">
            <div className="flex justify-center mb-6">
              <div className="w-[100px] h-[100px] rounded-full border border-dashed border-[#246BFD] flex items-center justify-center p-2.5">
                <div className="w-[80px] h-[80px] rounded-full bg-[#ECEFFF] flex items-center justify-center shadow-sm">
                  <Image
                    src="/icons/values.svg"
                    alt={t("values.title") || "Values"}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
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
                <div className="w-16 h-16 rounded-full bg-[#ECEFFF] border border-blue-100 flex items-center justify-center mb-4 group-hover:shadow-md transition-shadow">
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
    </section>
  );
}
