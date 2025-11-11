import ThirdService from "@/components/services/ThirdService/ThirdService";
import React from "react";
import { getLangFromParams, getPageMeta } from "@/lib/seo";

export default function page() {
  return <ThirdService />;
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("service3", lang, resolved);
}


