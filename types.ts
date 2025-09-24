
export enum Language {
  NL = 'NL',
  EN = 'EN',
  TR = 'TR',
  PL = 'PL',
  SK = 'SK',
  DE = 'DE',
  HU = 'HU',
  FR = 'FR',
}

export interface MenuItem {
  name: string;
  description: string;
  price?: string;
  imageIds: string[];
  ingredientKeys?: string[];
  allergenKeys?: string[];
}

export interface MenuCategory {
  category: string;
  items: MenuItem[];
}

export interface Review {
  author: string;
  text: string;
  rating: number;
}

export type Translations = {
  [key: string]: { [lang in Language]: string };
};

export type AppContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  theme: 'light' | 'dark' | 'wood' | 'flower';
  toggleTheme: () => void;
};