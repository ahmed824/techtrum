"use client";
import Image from "next/image";
import { Services } from "./services";
import ServiceCard from "./ServiceCard";

export function ServicesSection({ t }) {
  const services = Services({ t });

  return (
    <section
      className="pt-32 pb-20 bg-[#F6F9FC] relative overflow-hidden"
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

        {/* Cards with 3 path.png Images in Zigzag Pattern */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-7 ">
            {services?.map((service, index) => (
              <div key={service.id} className="relative">
                <ServiceCard service={service} />

                {/* path.png - Only 3 times: Top, Bottom, Top */}
                {index < 4 && (
                  <div className="z-0">
                    {/* 1st connector: Card 1 to Card 2 (TOP) */}
                    {index === 0 && (
                      <div className="hidden lg:block absolute -top-14 left-full transform -translate-x-1/2 w-32 h-20 pointer-events-none z-10">
                        <Image
                          src="/path.png"
                          alt="Connector"
                          width={128}
                          height={80}
                          className="w-full h-full object-contain"
                          priority
                        />
                      </div>
                    )}

                    {/* 2nd connector: Card 2 to Card 3 (BOTTOM) */}
                    {index === 1 && (
                      <div className="hidden lg:block absolute -bottom-24 left-full transform -translate-x-1/2 -translate-y-1/2 w-32 h-20 pointer-events-none z-10">
                        <Image
                          src="/path.png"
                          alt="Connector"
                          width={128}
                          height={80}
                          className="w-full h-full object-contain scale-y-[-1]"
                          priority
                        />
                      </div>
                    )}

                    {/* 3rd connector: Card 4 to Card 5 (TOP) */}
                    {index === 3 && (
                      <div className="hidden lg:block absolute -top-14 left-full transform -translate-x-1/2 w-32 h-20 pointer-events-none z-10">
                        <Image
                          src="/path.png"
                          alt="Connector"
                          width={128}
                          height={80}
                          className="w-full h-full object-contain"
                          priority
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
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
