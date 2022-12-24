<template>
  <div
    :class="
      appStore.userThemeMode === THEME_MODE_DARK ||
      (!appStore.userThemeMode && isSystemDark)
        ? 'dark'
        : ''
    "
  >
    <RouterView class="w-screen min-h-screen" />
    <Toast />
    <ScreenLoader />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { RouterView } from "vue-router";
import Toast from "primevue/toast";
import ScreenLoader from "@/shared/components/ScreenLoader.vue";

import { useAppStore } from "@/stores/app.store";
import { THEME_MODE_DARK } from "./app/utils/constants";

const appStore = useAppStore();
const colorSchemeDarkMatchMedia = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

const isSystemDark = ref(colorSchemeDarkMatchMedia.matches);

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
  isSystemDark.value = colorSchemeDarkMatchMedia.matches;
  appStore.loadTheme(appStore.userThemeMode);
};
</script>
