"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'ar' : 'en';
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const handleLanguageChange = (lng: string) => {
            setCurrentLanguage(lng); // Update state when language changes
        };
        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    return (
        <button
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-medium bg-gray-100 rounded dark:bg-gray-800 dark:text-gray-200"
        >
            {currentLanguage === 'en' ? 'العربية' : 'English'}
        </button>
    );
};

export default LanguageSwitcher;
