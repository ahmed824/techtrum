import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRightLong } from "react-icons/fa6";

export function OtherServices({ t, excludeKeys = [] }) {
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();
  const all = [
    { key: "digital", icon: "/icons/digital-transformation.svg", title: t("capabilities.digital") },
    { key: "emerging", icon: "/icons/emerging-tech.svg", title: t("capabilities.emerging") },
  ];

  const capabilities = all.filter((c) => !excludeKeys.includes(c.key)).map((c) => ({
    icon: c.icon,
    title: c.title,
    details: t("capabilities.details"),
    hrefKey: c.key,
  }));

  return (
    <section className="py-20 md:py-36 relative overflow-hidden">
      {/* Top Badge */}
      <div className="container mx-auto px-4">

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-24 max-w-4xl mx-auto">
          {t("capabilities.title") || "Techtrum Capabilities"}
        </h2>
      </div>

      {/* 3 Centered Cards */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-28 max-w-6xl mx-auto">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="flex-1 bg-white max-w-[360px] rounded-[10px] p-8 border border-[#CACACA] flex flex-col items-center text-center custom-shadow"
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
                href={cap.hrefKey === "digital" ? `/${currentLang}/service-2` : cap.hrefKey === "emerging" ? `/${currentLang}/service-3` : "#"}
                className="text-[#236BFD] text-2xl font-light flex items-center gap-2 hover:gap-3 transition-all mt-auto"
              >
                {cap.details}
                <FaArrowRightLong className="text-lg font-light" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Bottom Decorative Image */}
      <div className=" z-0 absolute bottom-14  w-full">
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
