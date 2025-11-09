import AboutPage from "@/components/AboutPage/AboutPage";
import React from "react";
import { getLangFromParams, getPageMeta } from "@/lib/seo";

export default function page() {
  return <AboutPage />;
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("about", lang, resolved);
}
