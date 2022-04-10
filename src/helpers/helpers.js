import { translations } from "./constants";

const getTranslation = (lang, text) => {
  return translations[lang][text];
};

export { getTranslation };
