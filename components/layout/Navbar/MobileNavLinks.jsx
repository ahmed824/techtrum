import Link from "next/link";
import { usePathname } from "next/navigation";
import { classNames } from "@/utils/classNames";

export function MobileNavLinks({
  navLinks,
  activeSection,
  setIsMenuOpen,
  t,
}) {
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();
  return (
    <div className="flex flex-col p-4 space-y-3">
      {navLinks.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          onClick={() => setIsMenuOpen(false)}
          className={classNames(
            "text-white py-2 px-2 rounded-md transition hover:text-[#236BFD]",
            "focus:outline-none focus:ring-2 focus:ring-[#236BFD] focus:ring-offset-2 focus:ring-offset-[#111123]",
            activeSection === id && "text-[#236BFD]"
          )}
          aria-label={label}
          aria-current={activeSection === id ? "page" : undefined}
          tabIndex={0}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}