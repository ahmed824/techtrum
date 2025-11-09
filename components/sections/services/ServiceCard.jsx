"use client";
import Image from "next/image";
import { useIsRTL } from "@/utils/useIsRTL";

export default function ServiceCard({ service }) {
  const isRTL = useIsRTL();

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="bg-white rounded-[10px] p-6 flex flex-col items-start h-full border border-[#7070705E] hover:shadow-lg transition-shadow duration-300 z-10 min-h-[400px]" 
    >
      {/* Icon with dashed circle and inner spacing */}
      <div className="relative w-20 h-20 mb-5">
        {/* Outer dashed circle */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#236BFD] opacity-60" />

        {/* Inner solid background circle with spacing */}
        <div className="absolute inset-2 rounded-full bg-[#ECEFFF] flex items-center justify-center">
          <Image
            src={service.icon}
            alt="service icon"
            width={36}
            height={36}
            className="w-9 h-9"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-black font-bold text-lg sm:text-xl mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-black text-lg ">
        {service.description}
      </p>
    </div>
  );
}
