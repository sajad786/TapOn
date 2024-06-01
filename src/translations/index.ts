import "intl-pluralrules";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import RNLanguageDetector from "@os-team/i18next-react-native-language-detector";

import enTranslation from "./en.json";
import urTranslation from "./ur.json";

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs: ["en", "ur",],
    resources: {
      en: {
        translation: enTranslation,
      },
      ur: {
        translation: urTranslation,
      },
    },
  });
