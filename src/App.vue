<template>
  <div
    :class="
      appStore.themeMode === THEME_MODE_DARK ||
      (appStore.themeMode === THEME_MODE_SYSTEM && isSystemDark)
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
import { THEME_MODE_DARK, THEME_MODE_SYSTEM } from "./app/utils/constants";

const appStore = useAppStore();
const colorSchemeDarkMatchMedia = window.matchMedia(
  "(prefers-color-scheme: dark)"
);

const isSystemDark = ref(colorSchemeDarkMatchMedia.matches);

onMounted(() => {
  appStore.fetchThemeMode();

  // if no user defined theme mode set system theme mode as default
  if (appStore.themeMode === "") {
    appStore.setThemeMode(THEME_MODE_SYSTEM);
  }

  loadTheme();

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
  if (appStore.themeMode === THEME_MODE_SYSTEM) {
    if (isSystemDark.value) {
      await appStore.changeTheme(appStore.darkTheme);
    } else {
      // isSystemDark.value = false;
      await appStore.changeTheme(appStore.defaultTheme);
    }
  }
};

const loadTheme = async () => {
  if (
    appStore.themeMode === THEME_MODE_DARK ||
    (appStore.themeMode === THEME_MODE_SYSTEM && isSystemDark.value)
  ) {
    await appStore.changeTheme(appStore.darkTheme);
  } else {
    await appStore.changeTheme(appStore.defaultTheme);
  }
};
</script>
