import { ref } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
  const isShowScreenLoader = ref(false);

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
    showScreenLoader,
  };
});
