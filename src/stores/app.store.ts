import { ref } from "vue";
import { defineStore } from "pinia";
import { THEME_MODE_DARK, THEME_MODE_KEY } from "@/app/utils/constants";

export const useAppStore = defineStore("app", () => {
  const defaultTheme = "/themes/md-light-deeppurple/theme.css";
  const darkTheme = "/themes/md-dark-deeppurple/theme.css";

  const isShowScreenLoader = ref(false);

  /** user defined theme mode persisted in local storage */
  const userThemeMode = ref(localStorage.getItem(THEME_MODE_KEY));

  function toggleDarkClassOnHtmlElement(isDark: boolean) {
    if (isDark) {
      document.getElementById("html")?.classList.add("dark");
    } else {
      document.getElementById("html")?.classList.remove("dark");
    }
  }

  /**
   * Change App theme
   * This function changes the href of the link element with id "theme-css" that loads the theme css of the app
   * @param theme: string
   * @returns void
   */
  async function changeTheme(theme: string) {
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
   * Load light or dark theme depending on user preferences or OS preferences
   * @param userThemeMode: string | null
   */
  function loadTheme(userThemeMode: string | null): void {
    if (
      userThemeMode === THEME_MODE_DARK ||
      (!userThemeMode &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toggleDarkClassOnHtmlElement(true);
      changeTheme(darkTheme);
    } else {
      toggleDarkClassOnHtmlElement(false);
      changeTheme(defaultTheme);
    }
  }

  /**
   * Retrieve user theme mode from local storage
   */
  function retrieveUserThemeMode(): void {
    userThemeMode.value = localStorage.getItem(THEME_MODE_KEY);
  }

  /**
   * Set user theme mode, from the theme mode switcher on the UI
   * if the user leaves the theme mode to the system, then the theme is cleared from local storage
   * @param themeMode: string | null
   * @returns void
   */
  function setUserThemeMode(themeMode: string | null): void {
    if (themeMode === null) {
      localStorage.removeItem(THEME_MODE_KEY);
    } else {
      localStorage.setItem(THEME_MODE_KEY, themeMode);
    }
    userThemeMode.value = themeMode;
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
    isShowScreenLoader,
    loadTheme,
    retrieveUserThemeMode,
    setUserThemeMode,
    showScreenLoader,
    userThemeMode,
  };
});
