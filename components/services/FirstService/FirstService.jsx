"use client";
import React from "react";
import BreadcrumbHero from "@/components/shared/Breadcrumb";
import { useTranslation } from "react-i18next";
import { ContactSection } from "@/components/sections/ContactSection";
import ServicesScroll from "../components/ServicesScroll";
import { OtherServices } from "../components/OtherServices";

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
      <ServicesScroll t={t} />
      <OtherServices t={t} excludeKeys={["telecom"]} />
      <div className="mb-80">
        <ContactSection t={t} />
      </div>
    </div>
  );
}
