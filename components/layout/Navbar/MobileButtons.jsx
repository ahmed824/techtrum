import { classNames } from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function MobileButtons({ t }) {
  const pathname = usePathname();
  const currentLang = (() => {
    const seg = pathname?.split("/").filter(Boolean)[0];
    return seg === "ar" ? "ar" : "en";
  })();

  return (
    <div className="p-4 border-t border-[#246BFD] mt-4 flex flex-col gap-3">
      <Link
        href={`/${currentLang}/book`}
        className={classNames(
          "bg-[#246BFD] text-white py-2 rounded-full transition font-medium text-center shadow-md hover:bg-[#1E5CFF] hover:shadow-lg",
          "focus:outline-none focus:ring-2 focus:ring-[#246BFD] focus:ring-offset-2 focus:ring-offset-[#12283F]"
        )}
        aria-label={t("navbar.bookVisit")}
      >
        {t("navbar.bookVisit")}
      </Link>
    </div>
  );
}
