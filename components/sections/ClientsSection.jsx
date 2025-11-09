"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useIsRTL } from "@/utils/useIsRTL";

export function ClientsSection({ t }) {
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

  const clients = [
    { id: 1, logo: "/clients/client6.png", name: "وزارة الشؤون الاجتماعية" },
    {
      id: 2,
      logo: "/clients/client1.png",
      name: "الهيئة العامة للأمن الغذائي",
    },
    { id: 3, logo: "/clients/client2.png", name: "وزارة الاتصالات" },
    { id: 4, logo: "/clients/client3.png", name: "الخطوط الحديدية" },
    { id: 5, logo: "/clients/client4.png", name: "أرامكو السعودية" },
    { id: 6, logo: "/clients/client5.png", name: "أرامكو السعودية" },
    { id: 7, logo: "/clients/client2.png", name: "وزارة الاتصالات" },
  ];

  return (
    <section
      className="py-20 bg-[#F8F9FF] relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4">
        {/* Centered Header */}
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Blue Badge */}
          <div className="inline-block mb-4">
            <span className="inline-block bg-[#236BFD] text-white text-xs sm:text-sm font-medium px-4 py-1.5 rounded-full">
              {t("clients.badge") || "Our Client"}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black relative z-10">
            {t("clients.title") || "Our previous Projects"}
          </h2>
        </div>

        {/* Swiper Slider */}
        <div dir={isRTL ? "rtl" : "ltr"}>
          <Swiper
            key={isRTL ? "rtl" : "ltr"}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            speed={800}
            spaceBetween={30}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="mt-10"
          >
            {clients.map((client, idx) => (
              <SwiperSlide key={client.id}>
                <div
                  className="flex items-center justify-center h-32 sm:h-36"
                  data-aos="fade-up"
                  data-aos-delay={idx * 50}
                >
                  <div className="relative w-32 h-24 sm:w-36 sm:h-28 lg:w-40 lg:h-32">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain transition-all duration-500 hover:scale-105"
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
