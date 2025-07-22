import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector"; // ✅ YANGI QATOR

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector) // ✅ YANGI QATOR
  .init({
    supportedLngs: ["en", "uz", "ru"], // ✅ RU QO‘SHILDI
    fallbackLng: "en",
    debug: true,
    backend: {
      loadPath: "/{{lng}}/translation.json",
    },
    detection: {
      order: ["cookie", "localStorage", "htmlTag", "path", "subdomain"],
      caches: ["cookie"],
    },
    react: {
      useSuspense: false,
    },
    returnObjects: true,  // << shu qatorni qo‘shdim
  });

export default i18n;
