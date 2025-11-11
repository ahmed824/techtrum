"use client";
import React from "react";
import BreadcrumbHero from "@/components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";
import { ContactSection } from "@/components/sections/ContactSection";
import { OtherServices } from "@/components/services/components/OtherServices";
import Image from "next/image";

export default function SecondService() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbHero
        titleKey="capabilities.digital"
        subtitle={t("capabilities.title")}
        subtitleImage="/icons/digital-transformation.svg"
        t={t}
      />
      <div className="container mx-auto px-4 mt-10">
        <div className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <Image
            src="/services-2.png"
            alt={t("capabilities.digital")}
            width={1600}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
      <OtherServices t={t} excludeKeys={["digital"]} />
      <div className="mb-80">
        <ContactSection t={t} />
      </div>
    </div>
  );
}


