"use client";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { usePathname } from "next/navigation";
export default function I18nProvider({ children }) {
    const pathname = usePathname();

    useEffect(() => {
        // Detect language from URL on mount and set document attributes
        if (typeof window !== "undefined") {
            const segments = pathname.split("/").filter(Boolean);

            if (segments.length > 0) {
                const firstSegment = segments[0];
                if (firstSegment === "en" || firstSegment === "ar") {
                    i18n.changeLanguage(firstSegment);
                }
            }

            const updateDirAndLang = (lng) => {
                const dir = lng === "ar" ? "rtl" : "ltr";
                const htmlEl = document.documentElement;
                if (htmlEl) {
                    htmlEl.setAttribute("lang", lng);
                    htmlEl.setAttribute("dir", dir);
                }
                const bodyEl = document.body;
                if (bodyEl) {
                    bodyEl.dir = dir;
                }
            };

            // Initial apply
            updateDirAndLang(i18n.language);

            // React to subsequent language changes
            const onLangChange = (lng) => updateDirAndLang(lng);
            i18n.on("languageChanged", onLangChange);

            return () => {
                i18n.off("languageChanged", onLangChange);
            };
        }
    }, [pathname]);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}