import ua from './lang/ua.json'
import en from './lang/en.json'

import {initReactI18next} from "react-i18next";
import i18n from 'i18next'

const resources = {
    en: {
        translation: en,
    },
    ua: {
        translation: ua,
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng:JSON.parse(localStorage.getItem('language')),
    fallbackLng: 'ua'
})

export default i18n;