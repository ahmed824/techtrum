import React from "react";
import { getLangFromParams, getPageMeta } from "@/lib/seo";
import HomeClient from "./HomeClient";

// Remove Suspense wrapper - let dynamic imports handle loading states
export default function Page() {
  return <HomeClient />;
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("home", lang, resolved);
}