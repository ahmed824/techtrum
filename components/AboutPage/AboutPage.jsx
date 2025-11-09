"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { AboutSection } from "./AboutSection";
 import { ValueChainSection } from "./ValueChainSection";
import { PartnersSection } from "../sections/PartnersSection";
import { ClientsSection } from "../sections/ClientsSection";
import { CtaSection } from "../sections/CtaSection";
import BreadcrumbHero from "../shared/Breadcrumb";

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbHero titleKey="pages.about.title" t={t} />
      <AboutSection t={t} />
      
      <ValueChainSection t={t} />
      
      <div data-aos="fade-up">
        <PartnersSection t={t} />
      </div>

      <div data-aos="fade-up">
        <ClientsSection t={t} />
      </div>
      <CtaSection t={t} />
    </div>
  );
}
