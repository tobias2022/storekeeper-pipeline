import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export enum Language {
  zh = 'zh',
  en = 'en',
}

export interface LanguageProperty {
  id: Language;
  label: string;
}

export const SUPPORT_LANGUAGES: LanguageProperty[] = [
  { id: Language.zh, label: '中文' },
  { id: Language.en, label: 'English' },
];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: Object.keys(Language),
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ['localStorage'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });

export default i18n;
