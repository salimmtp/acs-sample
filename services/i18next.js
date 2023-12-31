import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../locales/en.json';
import it from '../locales/it.json';

export const languageResources = {
  en: {translation: en},
  it: {translation: it},
};
i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

// This is the function to change the language
const changeLng = lng => {
  i18next.changeLanguage(lng);
  setVisible(false);
};

export default i18next;
