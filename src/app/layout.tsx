'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../style/globals.scss";
import { useEffect } from "react";
import i18n from "@/utilities/i18next";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import DarkModeSwitcher from "@/components/common/DarkModeSwitcher";

// export const metadata: Metadata = {
//   title: "Uktob",
//   description: "",
// };

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng') || 'en';
    i18n.changeLanguage(savedLanguage);

    // Now set direction on the client side
    document.documentElement.setAttribute('lang', savedLanguage);
    document.body.setAttribute('dir', savedLanguage === 'ar' ? 'rtl' : 'ltr');
  }, []);


  return (
    <html lang="en">
      <body className="relative">
        <div className="absolute top-4 right-4">
          <LanguageSwitcher />
          {/* <DarkModeSwitcher /> */}
        </div>
        {children}
      </body>
    </html>
  );
}
