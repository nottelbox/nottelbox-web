import React, { useState } from "react";
import type { SupportedLanguage } from "./translations.types";
import { LanguageContext } from "./LanguageContext";

const getBrowserLang = (): SupportedLanguage => {
  const lang = navigator.language.split("-")[0];
  return ["de", "en"].includes(lang) ? (lang as SupportedLanguage) : "de";
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<SupportedLanguage>(getBrowserLang);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};