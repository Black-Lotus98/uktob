"use client";
import { useEffect, useState } from "react";
import i18n from "@/utilities/i18next";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import "../style/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [language, setLanguage] = useState("en"); // Default language must match SSR output

  useEffect(() => {
    setIsHydrated(true);

    const savedLanguage = localStorage.getItem("i18nextLng") || "en";
    setLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, []);

  return (
    <html lang={isHydrated ? language : "en"} suppressHydrationWarning>
      <body className="relative" dir={isHydrated ? (language === "ar" ? "rtl" : "ltr") : "ltr"} suppressHydrationWarning>

        <div className="absolute top-0 w-full flex justify-end p-4 z-50">
          <LanguageSwitcher />
        </div>
        {children}
      </body>
    </html>
  );
}
