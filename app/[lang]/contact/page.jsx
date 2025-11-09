import ContactClient from './ContactClient';
import { getLangFromParams, getPageMeta } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("contact", lang, resolved);
}

export default function ContactPage({ params }) {
  return <ContactClient />;
}
