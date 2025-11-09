"use client";
import { useRef } from "react";
import Image from "next/image";
import SectionHeader from "@/components/shared/SectionHeader";
 import ServicesSlider from "@/components/sections/services/ServiceSlider";
import { Services } from "@/components/sections/services/services";

export function OtherServices({ t }) {
  const swiperRef = useRef(null);

  return (
    <section
      className="pt-32 pb-32 bg-[#F6F9FC] relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-4 relative z-10">
        

        {/* Slider */}
        <div data-aos="zoom-in" data-aos-delay="150">
          <ServicesSlider services={Services({ t })} swiperRef={swiperRef} />
        </div>
      </div>
    </section>
  );
}
