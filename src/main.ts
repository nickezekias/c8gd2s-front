/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import i18n from "./i18n";

import PrimeVue from "primevue/config";
// import "primevue/resources/themes/saga-blue/theme.css";
// import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
// import "primeflex/primeflex.css";
import "./assets/css/theme.css";
import "../public/css/tailwind.css";
import "./assets/main.css";

import Button from "primevue/button";
import NavLink from "./shared/components/NavLink.vue";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import ToastService from "primevue/toastservice";

import Dropdown from "primevue/dropdown";
import InputMask from "primevue/inputmask";
import InputNumber from "primevue/inputnumber";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue);
app.use(ToastService);

// eslint-disable-next-line vue/no-reserved-component-names, vue/multi-word-component-names
app.component("Button", Button);
app.component("NavLink", NavLink);
app.component("InputText", InputText);
app.component("Card", Card);

app.component("Dropdown", Dropdown);
app.component("InputMask", InputMask);
app.component("InputNumber", InputNumber);

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

app.mount("#app");
