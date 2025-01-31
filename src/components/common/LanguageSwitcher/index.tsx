"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/utilities/i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      setCurrentLanguage(lng); // Update state when language changes
    };
    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLanguage === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang); // Persist language change
    document.documentElement.setAttribute("lang", newLang);
    document.body.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 text-sm font-medium bg-gray-100 rounded"
      suppressHydrationWarning
    >
      {currentLanguage === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
