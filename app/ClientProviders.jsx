"use client";
import React from "react";
import dynamic from "next/dynamic";
import I18nProvider from "./I18nProvider.jsx";
import GlobalLoader from "@/components/shared/GlobalLoader";

// Dynamically import Footer to prevent it from blocking initial render
const Footer = dynamic(() => import("@/components/layout/Footer").then((mod) => ({ default: mod.Footer })), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />,
});

const AOSProvider = dynamic(() => import("./AOSProvider.jsx"), { ssr: false });

export default function ClientProviders({ children }) {
  return (
    <I18nProvider>
      <GlobalLoader />
      <AOSProvider>{children}</AOSProvider>
      <Footer />
    </I18nProvider>
  );
}


