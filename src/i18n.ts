import { createI18n } from "vue-i18n";
/*
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from "@intlify/vite-plugin-vue-i18n/messages";

const i18n = createI18n({
  locale: import.meta.env.VITE_I18N_LOCALE || "en",
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
  messages,
});

export default i18n;
