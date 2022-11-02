import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import * as en from "./en.json";
import * as pl from "./pl.json";

// i18n Configuration
const translations = {
  en,
  pl,
};

const defineLocale = () => {
  i18n.locale = Localization.locale;
  if (i18n.locale === "pl-PL") i18n.locale = "pl";
  if (i18n.locale === "en-US") i18n.locale = "en";
  return i18n.locale;
};

const i18n = new I18n(translations);
i18n.locale = defineLocale();
// i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
