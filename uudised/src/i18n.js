import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "Avalehele":"Homepage",
      "Uudiste lehele":"News",
      "Võta meiega ühendust":"Contact us",
      "Info meist":"About us",
      "Ülesanded":"Assignments",
      "Lisa uudis": "Add news",
      "Halda uudiseid":"Manage news",

    }
  },
  ee: {
    translation: {
        "Avalehele":"Avaleht",
      "uudiste lehele":"Uudised",
      "Võta meiega ühendust":"Kontakt",
      "Info meist":"Meist",
      "Ülesanded":"Ülesanded",
      "lisa uudis":"Lisa uudis",
      "Halda uudiseid":"Halda uudiseid",
    }
  },
  ru: {
    translation: {
        "Avalehele":"Дом",
        "Uudiste lehele":"Новости",
        "Võta meiega ühendust":"Контакт",
        "Info meist":"О нас",
        "Ülesanded":"Назначения",
        "Lisa uudis":"Добавить новости",
        "Halda uudiseid":"Управление новостями",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("language") || "ee", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;