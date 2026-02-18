import { de } from "./de";
import { en } from "./en";

export type Translation = {
  navbar: {
    vegan: string;
    projects: string;
  };
  aboutMe: {
    heading: string;
    introduction: string;
    skills: Skill[];
    contact: string;
    emailMe: string;
  };
  vegan: {
    veganism: string;
    definition: string;
    veganMisconceptions: {
        veganMisconceptions: string;
        list: VeganMisconception[];
    };
  };
  projects: {
    projects: string;
    gameOfLife: {
        conwaysGameOfLife: string;
        controls: {
            start: string;
            pause: string;
            random: string;
            singleStep: string;
            generationDuration: string;
            ms: string;
            generationsPerSecond: string;
            clear: string;
        }
    }
  };
};

export type VeganMisconception = {
    name: string;
    content: string;
}

export type Skill = {
    symbol: string;
    heading: string;
    explanation: string;
}


export const translations: Record<string, Translation> = {
  de,
  en,
};

export type SupportedLanguage = keyof typeof translations;
