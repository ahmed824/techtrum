import React from 'react'
import { getLangFromParams, getPageMeta } from "@/lib/seo";
import BookClient from './BookClient'

const Book = () => {
  return <BookClient/>;
}

export default Book

export async function generateMetadata({ params }) {
  const resolved = await params;
  const lang = getLangFromParams(resolved);
  return getPageMeta("book", lang, resolved);
}
