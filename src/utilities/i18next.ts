import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import language from "../data/language.json";

// Define translation resources
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

// Function to safely get the saved language
const getSavedLanguage = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("i18nextLng") || "en";
  }
  return "en"; // Default to English on the server
};

const savedLanguage = getSavedLanguage();

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Function to update document attributes safely
export const setDocumentDirection = (lng: string) => {
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("lang", lng);
    document.body.setAttribute("dir", lng === "ar" ? "rtl" : "ltr");
  }
};

// Listen for language changes
if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    setDocumentDirection(lng);
    localStorage.setItem("i18nextLng", lng);
  });

  // Set the direction on initial load (only on the client)
  setDocumentDirection(savedLanguage);
}

export default i18n;
