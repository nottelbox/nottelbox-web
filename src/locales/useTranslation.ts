import { useLanguage } from "./LanguageContext";
import { translations } from "./translations.types";

export const useTranslation = () => {
  const { lang } = useLanguage();
  return translations[lang];
};
