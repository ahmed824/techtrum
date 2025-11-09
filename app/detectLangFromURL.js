export const detectLangFromURL = () => {
  if (typeof window === "undefined") return "ar";

  const pathname = window.location.pathname;
  const segments = pathname.split("/").filter(Boolean);

  // Check if first segment is a language code
  if (segments.length > 0) {
    const firstSegment = segments[0];
    if (firstSegment === "en" || firstSegment === "ar") {
      return firstSegment;
    }
  }

  // Default to Arabic
  return "ar";
};
