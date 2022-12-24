import { ref } from "vue";
import { defineStore } from "pinia";
import { THEME_MODE_KEY } from "@/app/utils/constants";

export const useAppStore = defineStore("app", () => {
  const isShowScreenLoader = ref(false);

  const themeMode = ref("");
  const defaultTheme = "/themes/md-light-deeppurple/theme.css";
  const darkTheme = "/themes/md-dark-deeppurple/theme.css";

  /**
   * Change App theme
   * This function changes the href of the link element with id "theme-css" that loads the theme css of the app
   * @param theme: string
   * @returns void
   */
  async function changeTheme(theme: string) {
    console.log("THEME", theme);
    const elementId = "theme-css";
    const linkElement = document.getElementById(elementId);
    const cloneLinkElement = linkElement?.cloneNode(true) as HTMLElement;
    cloneLinkElement?.setAttribute("id", elementId + "-clone");
    cloneLinkElement?.setAttribute("href", theme);
    cloneLinkElement?.addEventListener("load", () => {
      linkElement?.remove();
      cloneLinkElement?.setAttribute("id", elementId);
    });
    linkElement?.parentNode?.insertBefore(
      cloneLinkElement as Node,
      linkElement.nextSibling
    );
  }

  /**
   * Fetch theme mode from local storage if available, or empty string
   * @return string
   */
  function fetchThemeMode() {
    if (THEME_MODE_KEY in localStorage) {
      themeMode.value = localStorage.getItem(THEME_MODE_KEY) as string;
    } else {
      themeMode.value = "";
    }
  }

  function setThemeMode(value: string) {
    themeMode.value = value;
  }

  function showScreenLoader(value: boolean, time = 0) {
    if (time > 0) {
      isShowScreenLoader.value = true;
      window.setTimeout(() => {
        isShowScreenLoader.value = false;
      }, time);
    } else {
      isShowScreenLoader.value = value;
    }
  }

  return {
    changeTheme,
    darkTheme,
    defaultTheme,
    fetchThemeMode,
    isShowScreenLoader,
    setThemeMode,
    showScreenLoader,
    themeMode,
  };
});
