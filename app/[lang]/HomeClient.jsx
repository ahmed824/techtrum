"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import { useTranslation } from "react-i18next";
import { HeroSkeleton } from "@/components/layout/HeroSkeleton";
import SectionSkeleton from "@/components/layout/SectionSkeleton";


// Hero Section - Load with priority and show skeleton
const HeroSection = dynamic(
  () => import("@/components/sections/Hero").then((mod) => ({ default: mod.HeroSection })),
  { 
    loading: () => <HeroSkeleton />,
    ssr: true // Keep SSR for better SEO
  }
);

// Other sections - Load progressively without blocking
const WhoWeAreSection = dynamic(
  () => import("@/components/sections/About").then((mod) => ({ default: mod.WhoWeAreSection })),
  { 
    loading: () => <SectionSkeleton />,
    ssr: false
  }
);

const ServicesSection = dynamic(
  () => import("@/components/sections/services/ServicesSection").then((mod) => ({ default: mod.ServicesSection })),
  { 
    loading: () => <SectionSkeleton />,
    ssr: false
  }
);

const CapabilitiesSection = dynamic(
  () => import("@/components/sections/CapabilitiesSection").then((mod) => ({ default: mod.CapabilitiesSection })),
  { 
    loading: () => <SectionSkeleton height="300px" />,
    ssr: false
  }
);

const ContactSection = dynamic(
  () => import("@/components/sections/ContactSection").then((mod) => ({ default: mod.ContactSection })),
  { 
    loading: () => <SectionSkeleton />,
    ssr: false
  }
); 

const PartnersSection = dynamic(
  () => import("@/components/sections/PartnersSection").then((mod) => ({ default: mod.PartnersSection })),
  { 
    loading: () => <SectionSkeleton height="300px" />,
    ssr: false
  }
);

const ClientsSection = dynamic(
  () => import("@/components/sections/ClientsSection").then((mod) => ({ default: mod.ClientsSection })),
  { 
    loading: () => <SectionSkeleton height="300px" />,
    ssr: false
  }
);

const CtaSection = dynamic(
  () => import("@/components/sections/CtaSection").then((mod) => ({ default: mod.CtaSection })),
  { 
    loading: () => <SectionSkeleton height="200px" />,
    ssr: false
  }
);

export default function HomeClient() {
  const { t } = useTranslation();
  
  return (
    <main className="min-h-screen" role="main">
      {/* Hero Section with Skeleton */}
      <Suspense fallback={<HeroSkeleton />}>
        <HeroSection t={t} />
      </Suspense>
      
      {/* Progressive loading for other sections */}
      <Suspense fallback={<SectionSkeleton />}>
        <div data-aos="fade-up">
          <WhoWeAreSection t={t} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <div data-aos="fade-up">
          <ServicesSection t={t} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="300px" />}>
        <div data-aos="fade-up">
          <CapabilitiesSection t={t} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <div data-aos="fade-up">
          <ContactSection t={t} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="300px" />}>
        <div data-aos="fade-up">
          <PartnersSection t={t} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="300px" />}>
        <div data-aos="fade-up">
          <ClientsSection t={t} />
        </div>
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton height="200px" />}>
        <CtaSection t={t} />
      </Suspense>
    </main>
  );
}