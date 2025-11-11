"use client";
import { useEffect, useRef, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIsRTL } from "@/utils/useIsRTL";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

// servicesData will be generated dynamically using translation keys

export default function ServicesScroll({ t: tProp }) {
  const { t: tHook, i18n } = useTranslation();
  const t = tProp || tHook;
  const isRTL = useIsRTL();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const blueLayerRef = useRef(null);
  const itemsRef = useRef([]);

  // Generate servicesData from translation keys - update when language changes
  const servicesData = useMemo(() => {
    if (!t) {
      // Fallback data if t is not available
      return [
        {
          id: 1,
          previewImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
          title: "01 - Wireless and Fiber Connectivity Advisory",
          description: "We are specialized in consultancy of wide range of spectrum analysis, coverage mapping, optimal antenna placement, Network CAPEX/OPEX for wireless deployments, IBS Design, Radio Frequency design and Optimization, critical mission, feasibility Studies & Route Planning, OSP Engineering, 5G Backhaul Solutions, SDN-Controlled Fiber Networks, Quantum Key Distribution (QKD), all of these services and consultancy within ensuring adherence to ITU, MCIT and CST regulations",
        },
        {
          id: 2,
          previewImage: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&h=600&fit=crop",
          title: "02 - Smart City Strategies & Planning",
          description: "With Technazm Consult you can Define long-term smart city goals aligned with sustainability, efficiency, and citizen well-being. Assess current infrastructure and identify areas for smart transformation. Digital Twins, Satellite, IoT and best practice",
        },
        {
          id: 3,
          previewImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
          title: "03 - Network Performance",
          description: "Capabilities in Benchmarking and Performance Optimization Strategies for Network Capacity Planning, Network RF-Interference Analysis, Level 3G Network Slicing Optimization can scale up your growth on very Balancing",
        },
      ];
    }
    
    // Try to get translations - use direct t() calls
    const item1Title = t("services.scroll.items.1.title");
    const item1Desc = t("services.scroll.items.1.description");
    
    const item2Title = t("services.scroll.items.2.title");
    const item2Desc = t("services.scroll.items.2.description");
    
    const item3Title = t("services.scroll.items.3.title");
    const item3Desc = t("services.scroll.items.3.description");
    
    // Debug: Log translations to see what's being returned
    if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
      console.log("Translation check:", {
        item1Title,
        item1Desc: item1Desc?.substring(0, 50),
        currentLang: i18n.language,
      });
    }
    
    // If translation returns the key itself, use fallback
    const getValue = (translated, key, fallback) => {
      // If t returns the key itself, it means translation not found
      if (!translated || translated === key || translated.startsWith("services.scroll")) {
        return fallback;
      }
      return translated;
    };
    
    return [
      {
        id: 1,
        previewImage: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
        title: getValue(item1Title, "services.scroll.items.1.title", "01 - Wireless and Fiber Connectivity Advisory"),
        description: getValue(item1Desc, "services.scroll.items.1.description", "We are specialized in consultancy of wide range of spectrum analysis, coverage mapping, optimal antenna placement, Network CAPEX/OPEX for wireless deployments, IBS Design, Radio Frequency design and Optimization, critical mission, feasibility Studies & Route Planning, OSP Engineering, 5G Backhaul Solutions, SDN-Controlled Fiber Networks, Quantum Key Distribution (QKD), all of these services and consultancy within ensuring adherence to ITU, MCIT and CST regulations"),
      },
      {
        id: 2,
        previewImage: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&h=600&fit=crop",
        title: getValue(item2Title, "services.scroll.items.2.title", "02 - Smart City Strategies & Planning"),
        description: getValue(item2Desc, "services.scroll.items.2.description", "With Technazm Consult you can Define long-term smart city goals aligned with sustainability, efficiency, and citizen well-being. Assess current infrastructure and identify areas for smart transformation. Digital Twins, Satellite, IoT and best practice"),
      },
      {
        id: 3,
        previewImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        title: getValue(item3Title, "services.scroll.items.3.title", "03 - Network Performance"),
        description: getValue(item3Desc, "services.scroll.items.3.description", "Capabilities in Benchmarking and Performance Optimization Strategies for Network Capacity Planning, Network RF-Interference Analysis, Level 3G Network Slicing Optimization can scale up your growth on very Balancing"),
      },
    ];
  }, [t, i18n.language]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only pin on larger screens
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: imageContainerRef.current,
          pinSpacing: false,
        });
      });

      servicesData.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: itemsRef.current[i],
          start: "top center",
          end: "bottom center",
          onEnter: () => animateImage(i),
          onEnterBack: () => animateImage(i),
        });
      });

      function animateImage(i) {
        setActiveIndex(i);

        // Animate blue layer
        gsap.to(blueLayerRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          onComplete: () =>
            gsap.to(blueLayerRef.current, {
              opacity: 1,
              scale: 1,
              duration: 0.4,
            }),
        });

        // Animate image
        gsap.to(imageRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.3,
          onComplete: () =>
            gsap.to(imageRef.current, { opacity: 1, y: 0, duration: 0.4 }),
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [servicesData]);

  return (
    <div className="container py-10 md:py-20 min-h-screen px-4">
      <div className="mx-auto flex justify-center lg:justify-end mb-8 md:-mb-12">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 bg-white rounded-full shadow-sm px-6 sm:px-10 md:px-14 py-3 sm:py-1 w-fit border border-gray-100">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg grid place-items-center flex-shrink-0">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 text-center sm:text-start">
            {t ? t("capabilities.telecom") : "Telecommunications & Smart Cities"}
          </h2>
        </div>
      </div>

      <section className="relative mt-20 md:mt-32 lg:mt-0" ref={containerRef} dir={isRTL ? "rtl" : "ltr"}>
        {/* Decorative Pattern Image - Bottom Left, 500px */}
        <div className={`absolute z-0 top-20 w-[500px] h-[500px] pointer-events-none opacity-85 hidden lg:block ${isRTL ? "-right-20" : "-left-20"}`}>
          <img
            src="/pattern.png"
            alt="Decorative pattern"
            className={`w-full h-full object-contain object-bottom ${isRTL ? "object-right" : "object-left"}`}
          />
        </div>
        <div className="container mx-auto px-4 max-w-7xl pb-10 md:pb-20 relative">
          <div className="grid lg:grid-cols-[45%_55%] gap-8 lg:gap-16 xl:gap-20">
            <div
              ref={imageContainerRef}
              className="lg:h-screen grid place-items-center"
            >
              <div className="relative w-full max-w-md lg:max-w-none mx-auto">
                {/* Blue background layer behind image - extends to left */}
                <div
                  ref={blueLayerRef}
                  className="absolute -top-2 md:-top-4 bottom-12 md:bottom-20 -left-3 md:-left-6 right-3 md:right-6 h-[400px] sm:h-[500px] md:h-[550px] rounded-[20px] md:rounded-[26px] bg-[#246BFD] z-0"
                />

                {/* Image container */}
                <div className="z-10 p-[4px] md:p-[6px]">
                  {/* Decorative Pattern Image - Bottom Left, 500px */}
                  <div className="absolute z-0 -bottom-[400px] lg:-bottom-[600px] left-2 md:left-4 w-[300px] lg:w-[470px] h-[600px] lg:h-[990px] pointer-events-none opacity-85 hidden lg:block">
                    <img
                      src="/horizental-deocoration.png"
                      alt="Decorative pattern"
                      className="w-full h-full object-contain object-bottom object-left"
                    />
                  </div>

                  <div className="rounded-[20px] md:rounded-[26px] overflow-hidden bg-white">
                    <img
                      ref={imageRef}
                      src={servicesData[activeIndex].previewImage}
                      alt={servicesData[activeIndex].title}
                      className="w-full aspect-[4/4.3] object-cover rounded-[20px] md:rounded-[25px]"
                    />
                  </div>
                </div>

                {/* Number badge */}
                <div className={`absolute text-4xl sm:text-5xl md:text-7xl font-bold bottom-1 md:bottom-2 text-black ${isRTL ? "-right-8 sm:-right-12 md:-right-20" : "-left-8 sm:-left-12 md:-left-20"}`}>
                  {String(activeIndex + 1).padStart(2, "0")}
                </div>

                {/* Grid pattern */}
                <svg
                  className={`absolute -bottom-12 md:-bottom-24 w-40 sm:w-48 md:w-64 h-20 sm:h-24 md:h-32 opacity-10 z-20 ${isRTL ? "right-16 sm:right-20 md:right-28" : "left-16 sm:left-20 md:left-28"}`}
                  viewBox="0 0 256 128"
                  fill="none"
                >
                  <line x1="20" y1="0" x2="20" y2="128" stroke="#3B82F6" />
                  <line x1="60" y1="0" x2="60" y2="128" stroke="#3B82F6" />
                  <line x1="100" y1="0" x2="100" y2="128" stroke="#3B82F6" />
                  <line x1="140" y1="0" x2="140" y2="128" stroke="#3B82F6" />
                  <line x1="180" y1="0" x2="180" y2="128" stroke="#3B82F6" />
                  <line x1="0" y1="40" x2="80" y2="40" stroke="#3B82F6" />
                  <line x1="60" y1="80" x2="140" y2="80" stroke="#3B82F6" />
                  <line x1="100" y1="100" x2="200" y2="100" stroke="#3B82F6" />
                  {[20, 60, 100, 140, 180].map((x) =>
                    [40, 80, 100].map((y) =>
                      (x === 20 && y !== 40) ||
                      (x === 180 && y !== 100) ? null : (
                        <circle
                          key={`${x}-${y}`}
                          cx={x}
                          cy={y}
                          r="3"
                          fill="#3B82F6"
                        />
                      )
                    )
                  )}
                </svg>
              </div>
            </div>

            <div className="relative space-y-20 md:space-y-32 lg:space-y-40 py-12 md:py-16 lg:py-24">
              <div className={`absolute top-14 md:top-20 lg:top-28 bottom-20 md:bottom-32 lg:bottom-40 w-[1px] bg-[#246BFD] ${isRTL ? "right-[7px]" : "left-[7px]"}`} />
              {servicesData.map((service, i) => (
                <div
                  key={service.id}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className="relative flex gap-3 md:gap-5"
                >
                  <div className="relative pt-2 md:pt-3 z-10">
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border border-[#246BFD] transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-[#246BFD] ring-2 md:ring-4 ring-[#246BFD]/20 scale-110"
                          : "bg-[#D1E6FF]"
                      }`}
                    />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4 relative">
                      {/* Number Badge (Square Background) */}
                      <div
                        className={`absolute top-[70%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-sm transition-all duration-300 ${
                          isRTL ? "right-5 sm:right-7 md:right-9" : "left-5 sm:left-7 md:left-9"
                        } ${activeIndex === i ? "bg-[#246BFD]" : "bg-[#D1E6FF]"}`}
                      />

                      {/* Number */}
                      <span className={`relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black ${isRTL ? "pr-1 md:pr-2" : "pl-1 md:pl-2"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black relative z-10 leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    <p className={`text-black text-sm sm:text-base md:text-lg lg:text-[20px] leading-relaxed max-w-xl ${isRTL ? "pr-12 sm:pr-14 md:pr-16 lg:pr-[72px]" : "pl-12 sm:pl-14 md:pl-16 lg:pl-[72px]"}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
