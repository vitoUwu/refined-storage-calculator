import React, { createContext, useContext, useState, useEffect } from 'react';
import { Translation, translations } from '../i18n/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translation;
  showAsPacks: boolean;
  setShowAsPacks: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('refined-storage-language');
    if (saved && translations[saved]) {
      return saved;
    }

    const browserLang = navigator.language;
    if (browserLang.startsWith('pt')) {
      return 'pt-BR';
    }
    return 'en';
  });

  const [showAsPacks, setShowAsPacks] = useState(() => {
    const saved = localStorage.getItem('refined-storage-show-packs');
    return saved === 'true';
  });

  const t = translations[language] || translations['en'];

  useEffect(() => {
    localStorage.setItem('refined-storage-language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('refined-storage-show-packs', showAsPacks.toString());
  }, [showAsPacks]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      showAsPacks,
      setShowAsPacks
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 