import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import i18n from "./i18n";

import PrimeVue from "primevue/config";
// import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/themes/md-light-deeppurple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./assets/main.css";

import Button from "primevue/button";
import NavLink from "./components/shared/NavLink.vue";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import ToastService from "primevue/toastservice";

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
// eslint-disable-next-line vue/multi-word-component-names
app.component("Card", Card);

app.mount("#app");
