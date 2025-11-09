// app/layout.tsx  (or .jsx if you prefer)
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

import { Geist, Geist_Mono, Cairo } from "next/font/google";
import ClientProviders from "./ClientProviders.jsx";
import Script from "next/script";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// ---------------------------------------------------------------------
// 1. Fonts (unchanged)
// ---------------------------------------------------------------------
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// ---------------------------------------------------------------------
// 2. Global Metadata (SEO + OG + Twitter)
// ---------------------------------------------------------------------
export const metadata = {
  // ---- Basic ----
  title: {
    default: "Fixer – Comprehensive Facility Management Solutions",
    template: "%s | Fixer",
  },
  description:
    "Saudi-based leader in facility management. Soft & hard services, landscaping, civil maintenance – all powered by technology & sustainability.",

  // ---- Robots & Viewport ----
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ---- Open Graph (Facebook, LinkedIn, WhatsApp…) ----
  openGraph: {
    title: "Fixer – We Fix It!",
    description:
      "Integrated & sustainable facility management solutions for Saudi businesses.",
    url: "https://www.fixerfm.com",
    siteName: "Fixer Facility Management",
    images: [
      {
        url: "https://www.fixerfm.com/og-image.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Fixer Facility Management – We Fix It!",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ---- Twitter Cards ----
  twitter: {
    card: "summary_large_image",
    site: "@fixerfm",
    title: "Fixer – We Fix It!",
    description:
      "Saudi leader in facility management, soft & hard services, landscaping.",
    images: ["https://www.fixerfm.com/twitter-image.jpg"], // 1200×600
  },

  // ---- Language alternates (i18n) ----
  alternates: {
    canonical: "https://www.fixerfm.com",
    languages: {
      "en-US": "https://www.fixerfm.com/en",
      "ar-SA": "https://www.fixerfm.com/ar",
    },
  },

  // ---- Misc ----
  verification: {
    google: "your-google-site-verification-code",
    // yandex: "...",
    // bing: "...",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b5ed7",
};

// ---------------------------------------------------------------------
// 3. JSON-LD Structured Data (Company + Breadcrumb)
// ---------------------------------------------------------------------
const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fixer Facility Management",
  url: "https://www.fixerfm.com",
  logo: "https://www.fixerfm.com/logo.svg",
  description:
    "Saudi-based leader in facility management, soft & hard services, landscaping and civil maintenance.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-53-966-9980",
    contactType: "Customer Service",
    email: "info@fixerfm.com",
    areaServed: "SA",
    availableLanguage: ["English", "Arabic"],
  },
  sameAs: [
    "https://twitter.com/fixerfm",
    "https://www.linkedin.com/company/fixerfm",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.fixerfm.com/",
    },
  ],
};

// ---------------------------------------------------------------------
// 4. Layout Component
// ---------------------------------------------------------------------
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      {/* ---- Structured Data ---- */}
      <head>
        <Script
          id="schema-company"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }}
        />
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* ---- Favicon & Apple Touch Icon ---- */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ---- Preconnect (optional performance) ---- */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} antialiased bg-white`}
        suppressHydrationWarning
      >
       <ClientProviders>
    <TopBar />
    <Navbar />
    {children}
  </ClientProviders>
      </body>
    </html>
  );
}
