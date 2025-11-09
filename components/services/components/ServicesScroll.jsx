"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    previewImage:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop",
    title: "Wireless and Fiber Connectivity Advisory",
    description:
      "we are specialized in consultancy of wide range of spectrum analysis, coverage mapping, optimal antenna placement, Network CAPEX/OPEX for wireless deployments, IBS Design, Radio Frequency design and Optimization, critical mission, feasibility Studies & Route Planning, OSP Engineering, 5G Backhaul Solutions, SON-Controlled Fiber Networks, Quantum Key Distribution (QKD), all of these services and consultancy within ensuring adherence to ITU, MCIT and CST regulations",
  },
  {
    id: 2,
    previewImage:
      "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=800&h=600&fit=crop",
    title: "Smart City Strategies & Planning",
    description:
      "with Techrium Consult you can Define long-term smart city goals aligned with sustainability, efficiency, and citizen well-being. Assess current infrastructure and identify areas for smart transformation, Digital Twins, Satellite, IoT and best practice",
  },
  {
    id: 3,
    previewImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    title: "Network Performance",
    description:
      "capabilities in Benchmarking and Performance Optimization Strategies for Network Capacity Planning, Scalability, RF Interference Mitigation, Band Steering, Load 5G Network Slicing Optimization can scale up your growth on very Balancing",
  }
];

export default function ServicesScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const imageRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: imageContainerRef.current,
        pinSpacing: false,
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
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl pt-16 pb-8">
        <div className="flex items-center gap-3 bg-white rounded-2xl shadow-sm px-6 py-4 w-fit border border-gray-100">
          <div className="w-10 h-10 bg-blue-50 rounded-lg grid place-items-center">
            <svg
              className="w-6 h-6 text-blue-600"
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
          <h2 className="text-xl font-bold text-gray-900">
            Telecommunications & Smart Cities
          </h2>
        </div>
      </div>

      <section ref={containerRef}>
        <div className="container mx-auto px-4 max-w-7xl pb-20">
          <div className="grid lg:grid-cols-[45%_55%] gap-16">
            <div
              ref={imageContainerRef}
              className="h-screen grid place-items-center"
            >
              <div className="relative w-full">
                <div className="relative rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 p-[6px]">
                  <div className="rounded-[36px] overflow-hidden bg-white">
                    <img
                      ref={imageRef}
                      src={servicesData[activeIndex].previewImage}
                      alt={servicesData[activeIndex].title}
                      className="w-full aspect-[4/3.2] object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-[32px] grid place-items-center shadow-2xl border-[6px] border-gray-100">
                  <span className="text-7xl font-bold text-gray-900">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                </div>

                <svg
                  className="absolute -bottom-24 left-28 w-64 h-32 opacity-10"
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

            <div className="relative space-y-40 py-24">
              <div className="absolute left-[7px] top-24 bottom-0 w-[2px] bg-[#D1E6FF]" />
              {servicesData.map((service, i) => (
                <div
                  key={service.id}
                  ref={(el) => (itemsRef.current[i] = el)}
                  className="relative flex gap-5"
                >
                  <div className="relative pt-3 z-10">
                    <div
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        activeIndex === i
                          ? "bg-[#246BFD] ring-4 ring-[#246BFD]/20 scale-110"
                          : "bg-[#D1E6FF]"
                      }`}
                    />
                  </div>
                  <div className="pt-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className={`text-5xl font-bold transition-colors ${
                          activeIndex === i ? "text-[#246BFD]" : "text-gray-900"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-[15px] leading-relaxed pl-[72px] max-w-xl">
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
