import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import { en } from './locales/en';
import { es } from './locales/es';
import { pt } from './locales/pt';

void i18n.use(LanguageDetector).use(initReactI18next).init({
  fallbackLng: 'en',
  supportedLngs: ['en', 'es', 'pt'],
  interpolation: { escapeValue: false },
  resources: { en: { translation: en }, es: { translation: es }, pt: { translation: pt } },
});

export default i18n;
