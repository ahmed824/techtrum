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
    default:
      "Techtrum – Scale Your Business Growth & Revenue to the Next Level",
    template: "%s | Techtrum",
  },
  description:
    "Techtrum is a specialized consulting firm offering advisory services in modern technologies and telecommunications within the business sector. Scale your business growth and revenue to the next level.",

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
    title: "Techtrum – Technology & Telecommunications Consulting",
    description:
      "Specialized consulting firm offering advisory services in modern technologies and telecommunications. Scale your business growth & revenue to the next level.",
    url: "https://www.techrium.com",
    siteName: "Techtrum",
    images: [
      {
        url: "https://www.techrium.com/og-image.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Techtrum – Technology & Telecommunications Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ---- Twitter Cards ----
  twitter: {
    card: "summary_large_image",
    site: "@techtrum",
    title: "Techtrum – Scale Your Business Growth",
    description:
      "Specialized consulting firm offering advisory services in modern technologies and telecommunications within the business sector.",
    images: ["https://www.techrium.com/twitter-image.jpg"], // 1200×600
  },

  // ---- Language alternates (i18n) ----
  alternates: {
    canonical: "https://www.techrium.com",
    languages: {
      "en-US": "https://www.techrium.com/en",
      "ar-SA": "https://www.techrium.com/ar",
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
  themeColor: "#246BFD",
};

// ---------------------------------------------------------------------
// 3. JSON-LD Structured Data (Company + Breadcrumb)
// ---------------------------------------------------------------------
const companySchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Techtrum",
  url: "https://www.techrium.com",
  logo: "https://www.techrium.com/logo.svg",
  description:
    "Techtrum is a specialized consulting firm offering advisory services in modern technologies and telecommunications within the business sector.",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966 55 444 2151",
    contactType: "Customer Service",
    email: "info@techrium.com",
    areaServed: "SA",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prince Khalid Bin Bander Street, AlArid Dist.",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  sameAs: [
    "https://twitter.com/techtrum",
    "https://www.linkedin.com/company/techtrum",
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
      item: "https://www.techrium.com/",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Techtrum",
  image: "https://www.techrium.com/logo.svg",
  description:
    "Scale your business growth & revenue to the next level. Specialized consulting firm offering advisory services in modern technologies and telecommunications within the business sector.",
  url: "https://www.techrium.com",
  telephone: "+966 55 444 2151",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Prince Khalid Bin Bander Street, AlArid Dist.",
    addressLocality: "Riyadh",
    addressCountry: "SA",
  },
  priceRange: "$$",
  serviceType: [
    "Technology Consulting",
    "Telecommunications Advisory",
    "Business Strategy",
    "Digital Transformation",
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
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
