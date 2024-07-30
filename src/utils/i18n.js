import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import translationEN from '~/locales/translationEN.json';
import translationVI from '~/locales/translationVI.json';
import translationKO from '~/locales/translationKO.json';

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    vi: {
        translation: translationVI,
    },
    ko: {
        translation: translationKO,
    },
};

i18n.use(Backend)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'vi',
        debug: false,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
