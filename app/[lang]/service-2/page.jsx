import SecondService from "@/components/services/SecondService/SecondService";
import React from "react";
import { getLangFromParams, getPageMeta } from "@/lib/seo";

export default function page() {
  return <SecondService />;
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("service2", lang, resolved);
}


