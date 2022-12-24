/* eslint-disable vue/multi-word-component-names */
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import i18n from "./i18n";

import PrimeVue from "primevue/config";

// import "primevue/resources/themes/saga-blue/theme.css";
// import "primevue/resources/themes/lara-light-blue/theme.css";
// import "primevue/resources/themes/md-dark-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./assets/css/theme.scss";
import "../public/css/tailwind.css";
// import "./assets/css/vars.css";
import "./assets/main.css";

import TwCard from "./shared/components/TwCard.vue";

import PButton from "primevue/button";
import TwButton from "./shared/components/TwButton.vue";
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
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

// eslint-disable-next-line vue/no-reserved-component-names, vue/multi-word-component-names
app.component("PButton", PButton);
app.component("TwButton", TwButton);
app.component("NavLink", NavLink);
app.component("InputText", InputText);
app.component("Card", Card);

app.component("Dropdown", Dropdown);
app.component("InputMask", InputMask);
app.component("InputNumber", InputNumber);

app.component("TwCard", TwCard);

app.mount("#app");
