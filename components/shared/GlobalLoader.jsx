"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function GlobalLoader() {
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);
  const [isLoading, setIsLoading] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (lastPathRef.current !== pathname) {
      lastPathRef.current = pathname;
      setIsLoading(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsLoading(false), 400);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div
      aria-live="polite"
      aria-busy="true"
      className="fixed inset-0 z-[9999] bg-white/70 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-3">
        <span
          className="inline-block h-10 w-10 border-4 border-[#236BFD] border-t-transparent rounded-full animate-spin"
          aria-hidden="true"
        />
        <span className="text-[#12283F] text-sm">Loading...</span>
      </div>
    </div>
  );
}


