"use client";
import React from "react";
import BreadcrumbHero from "@/components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";
import { ContactSection } from "@/components/sections/ContactSection";
import { OtherServices } from "@/components/services/components/OtherServices";
import ThirdServicesScroll from "./ServicesScroll";

export default function ThirdService() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbHero
        titleKey="capabilities.emerging"
        subtitleImage="/icons/emerging-tech.svg"
        t={t}
      />
      <ThirdServicesScroll t={t} />
      <OtherServices t={t} excludeKeys={["emerging"]} />
      <div className="mb-80">
        <ContactSection t={t} />
      </div>
    </div>
  );
}
