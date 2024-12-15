import { createContext, useState, useContext, ReactNode, useCallback, useEffect } from 'react';
import translationsPred from './translations/en.json';

export interface TranslationContextType {
  locale: string;
  translations: any;
  switchLanguage: (lang: string) => void;
}

const TranslationContext = createContext<TranslationContextType>({
  locale: 'en',
  translations: {},
  switchLanguage: () => {},
});

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<string>('en');
  const [translations, setTranslations] = useState<any>(translationsPred);

  const loadTranslations = useCallback(async (lang: string) => {
    const loadedTranslations = await import(`./translations/${lang}.json`);
    setTranslations(loadedTranslations.default);
  }, []);

  const switchLanguage = useCallback(
    (lang: string) => {
      setLocale(lang);
      loadTranslations(lang);
    },
    [loadTranslations]
  );

  useEffect(() => {
    loadTranslations(locale);
  }, [locale, loadTranslations]);

  return <TranslationContext.Provider value={{ locale, translations, switchLanguage }}>{children}</TranslationContext.Provider>;
};

export const useTranslation = (): TranslationContextType => useContext(TranslationContext);
