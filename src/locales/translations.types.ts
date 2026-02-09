import { de } from "./de";
import { en } from "./en";

export type Translation = {
  navbar: {
    vegan: string;
    projects: string;
  }
  aboutMe: {
    heading: string;
  },
  vegan: {
    veganism: string;
    definition: string;
  }
  projects: {
    projects: string;
  }
};

export const translations: Record<string, Translation> = {
  de,
  en,
};

export type SupportedLanguage = keyof typeof translations;
