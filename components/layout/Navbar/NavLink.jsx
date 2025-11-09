"use client";

import Link from "next/link";
import { classNames } from "@/utils/classNames";
import { useIsRTL } from "@/utils/useIsRTL";

export function NavLink({ href, label, isActive, onClick }) {
  const isRTL = useIsRTL();
  return (
    <Link
      href={href}
      onClick={onClick}
      className={classNames(
        "relative text-[#12283F] font-bold text-lg transition hover:text-[#236BFD]",
        isRTL ? "pl-4" : "pr-4",
        isActive && "text-[#236BFD]"
      )}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
    >
      {label}
    </Link>
  );
}