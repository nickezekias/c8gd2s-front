<template>
  <div>
    <RouterView class="w-screen min-h-screen" />
    <Toast />
    <ScreenLoader />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";
import Toast from "primevue/toast";
import ScreenLoader from "@/app/shared/components/ScreenLoader.vue";

import { useAppStore } from "@/stores/app.store";

const appStore = useAppStore();
const colorSchemeDarkMatchMedia = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

onMounted(() => {
  appStore.retrieveUserThemeMode();

  appStore.loadTheme(appStore.userThemeMode);

  colorSchemeDarkMatchMedia.addEventListener(
    "change",
    onSystemColorSchemeChange
  );
});

onUnmounted(() => {
  colorSchemeDarkMatchMedia.removeEventListener("change", () => {});
});

const onSystemColorSchemeChange = async () => {
  appStore.loadTheme(appStore.userThemeMode);
};
</script>
