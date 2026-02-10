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
    veganMisconceptions: {
        veganMisconceptions: string;
        list: VeganMisconception[];
    },
    unfold: string;
    close: string;
  }
  projects: {
    projects: string;
  }
};

type VeganMisconception = {
    name: string;
    content: string;
}

export const translations: Record<string, Translation> = {
  de,
  en,
};

export type SupportedLanguage = keyof typeof translations;
