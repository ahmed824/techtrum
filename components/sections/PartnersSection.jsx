"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useIsRTL } from "@/utils/useIsRTL";

export function PartnersSection({ t }) {
  const swiperRef = useRef(null);
  const isRTL = useIsRTL();

  useEffect(() => {
    if (!swiperRef?.current) return;
    const swiper = swiperRef.current;
    try {
      const currentIndex = swiper.activeIndex || 0;
      if (typeof swiper.changeDirection === "function") {
        swiper.changeDirection(isRTL ? "rtl" : "ltr");
      }
      swiper.slideTo(currentIndex, 0);
      if (typeof swiper.update === "function") swiper.update();
    } catch {}
  }, [isRTL, swiperRef]);

  const partners = [
    { id: 1, logo: "/partners/partner1.png", name: "Builder.ai" },
    { id: 2, logo: "/partners/partner2.png", name: "Global Dimensions Group" },
    { id: 3, logo: "/partners/partner3.png", name: "Eracent" },
    { id: 4, logo: "/partners/partner4.png", name: "bmc" },
    { id: 5, logo: "/partners/partner5.png", name: "Trellix" },
    { id: 6, logo: "/partners/partner6.png", name: "SYNC" },
    { id: 7, logo: "/partners/partner3.png", name: "SYNC" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden" data-aos="fade-up">
      <div className="container mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-4">
          <span className="inline-block bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
            {t("partners.badge") || "Our Partner"}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black mb-16">
          {t("partners.title") || "Strategic partnerships"}
        </h2>

        {/* Swiper Slider */}
        <div dir={isRTL ? "rtl" : "ltr"}>
          <Swiper
            key={isRTL ? "rtl" : "ltr"}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            speed={800}
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="mt-8"
          >
            {partners.map((partner, idx) => (
              <SwiperSlide key={partner.id}>
                <div
                  className="flex items-center justify-center h-32"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="relative w-32 h-20 sm:w-36 sm:h-24 lg:w-40 lg:h-28">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain transition-transform hover:scale-110 duration-500"
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}