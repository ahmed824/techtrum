import FirstService from "@/components/services/FirstService/FirstService";
import React from "react";
import { getLangFromParams, getPageMeta } from "@/lib/seo";

export default function page() {
  return <FirstService />;
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("service1", lang, resolved);
}
