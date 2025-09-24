
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { AppContextType, Language } from '../types';
import { translations } from '../i18n/translations';

export const AppContext = createContext<AppContextType | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLang = localStorage.getItem('language');
    return (savedLang as Language) || Language.PL;
  });

  const [theme, setTheme] = useState<'light' | 'dark' | 'wood' | 'flower'>(() => {
     if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'wood' || savedTheme === 'flower') {
            return savedTheme;
        }
     }
     return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('dark', 'theme-wood', 'theme-flower');
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else if (theme === 'wood') {
        root.classList.add('dark', 'theme-wood');
    } else if (theme === 'flower') {
        root.classList.add('dark', 'theme-flower');
    }
    
    localStorage.setItem('theme', theme);
  }, [theme]);


  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => {
        if (prevTheme === 'light') return 'dark';
        if (prevTheme === 'dark') return 'wood';
        if (prevTheme === 'wood') return 'flower';
        return 'light'; // from 'flower' back to 'light'
    });
  };

  const t = useCallback((key: string): string => {
    return translations[key]?.[language] || key;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t,
    theme,
    toggleTheme,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};