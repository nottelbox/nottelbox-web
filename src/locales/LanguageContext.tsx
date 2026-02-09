import { createContext, useContext } from "react";
import type { SupportedLanguage } from "./translations.types";

type LanguageContextType = {
  lang: SupportedLanguage;
  setLang: (lang: SupportedLanguage) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
};