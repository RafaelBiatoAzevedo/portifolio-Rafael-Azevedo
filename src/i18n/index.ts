import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

import translations from './locates';

const i18nConfig = {
  resources: translations,
  fallbackLng: 'en-US',
  defaultNS: 'translations',
};

i18n.use(initReactI18next).init(i18nConfig);

export default i18n;
