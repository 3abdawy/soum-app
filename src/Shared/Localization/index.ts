import i18 from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import en from './en.json';
import ar from './ar.json';

const resources = {
  en: {translation: en},
  ar: {translation: ar},
};

const {isRTL} = I18nManager;

i18.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: isRTL ? 'ar' : 'en',
  fallbackLng: 'ar',
  resources,
});

export default i18;
