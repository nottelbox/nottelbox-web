import { de } from "./de";
import { en } from "./en";

export type Translation = {
  home: {
    heading: string;
  }
};

export const translations: Record<string, Translation> = {
  de,
  en,
};

export type SupportedLanguage = keyof typeof translations;
