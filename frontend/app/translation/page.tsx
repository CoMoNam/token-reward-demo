'use client'

import "@/src/lib/i18n";
import { useTranslation } from "react-i18next";

export default function translation() {
    const { t, i18n } = useTranslation();

    const toggleLang = () => {
      i18n.changeLanguage(i18n.language === "ko" ? "en" : "ko");
    };
    return (
        <>
        <h1 className="text-2xl font-bold mb-4">{t("title")}</h1>
      <p>{t("tra-join")}</p>
      <button
        onClick={toggleLang}
        className="mt-4 px-4 py-2 border rounded"
      >
        {i18n.language === "ko" ? "🇰🇷 한국어" : "🇺🇸 English"}
      </button>
        </>
    )
}