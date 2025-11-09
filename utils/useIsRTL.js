"use client";

import { useEffect, useState } from "react";
import i18n from "@/app/i18n";

export function useIsRTL() {
    const getDir = () => {
        if (typeof document === "undefined") return false;
        const htmlDir = document.documentElement ? .getAttribute ? .("dir");
        const bodyDir = document.body ? .dir;
        const byDom = (htmlDir || bodyDir || "").toLowerCase() === "rtl";
        const byLng = (i18n ? .language || "en").startsWith("ar");
        return byDom || byLng;
    };

    const [isRTL, setIsRTL] = useState(getDir);

    useEffect(() => {
        const update = () => setIsRTL(getDir());

        update();
        i18n.on("languageChanged", update);
        return () => i18n.off("languageChanged", update);
    }, []);

    return isRTL;
}