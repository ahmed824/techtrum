"use client";
import React from "react";
import BreadcrumbHero from "@/components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";
import { ContactSection } from "@/components/sections/ContactSection";
import ServicesScroll from "../components/ServicesScroll";
import { OtherServices } from "../components/OtherServices";
import Image from "next/image";

export default function FirstService() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbHero
        titleKey="capabilities.telecom"
        subtitle={t("capabilities.title")}
        subtitleImage="/icons/telecommunications.svg"
        t={t}
      />

      {/* Service Details */}
      <div className="container mx-auto px-4 mt-10">
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <Image
            src="/services-1.png"
            alt={t("capabilities.telecom")}
            width={1600}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>

      {/* Service Details */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-10">
          {t("capabilities.telecom")}
        </h2>
        <div className="space-y-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border border-[#E5E7EB] rounded-xl p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#12283F] mb-3">
                {t(`services.first.items.${i}.title`)}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t(`services.first.items.${i}.description`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Services (exclude current) */}
      <OtherServices t={t} excludeKeys={["digital", "emerging"]} />
      <div className="mb-80">
        <ContactSection t={t} />
      </div>
    </div>
  );
}
