import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import language from '../data/language.json';

const resources = {
    en: {
        translation: Object.fromEntries(
            Object.entries(language).map(([key, value]) => [key, value.en])
        ),
    },
    ar: {
        translation: Object.fromEntries(
            Object.entries(language).map(([key, value]) => [key, value.ar])
        ),
    },
};

// Retrieve saved language or default to 'en'
const savedLanguage = localStorage.getItem('i18nextLng') || 'en';

// Set the `dir` attribute based on the saved language
const setDocumentDirection = (lng: string) => {
    document.documentElement.setAttribute('lang', lng); // Set lang attribute
    document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr'); // Set dir attribute
};

// Initialize i18n
i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage, // Set initial language
    fallbackLng: 'en', // Default fallback language
    interpolation: {
        escapeValue: false, // React already escapes by default
    },
    detection: {
        order: ['localStorage', 'cookie', 'navigator'],
        caches: ['localStorage', 'cookie'],
    },
});

// Set the direction on load and when language changes
setDocumentDirection(savedLanguage); // Initial load
i18n.on('languageChanged', (lng) => {
    setDocumentDirection(lng); // Update on language change
    localStorage.setItem('i18nextLng', lng); // Save the language to localStorage
});

export default i18n;
