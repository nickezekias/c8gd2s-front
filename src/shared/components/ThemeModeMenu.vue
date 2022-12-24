<!-- Created on : 2022/12/23 - 13:33:01 -->
<template>
  <PButton
    type="button"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
    icon="pi pi-sun"
    class="mr-4 p-button-rounded bg-transparent text-primary hover:enabled:bg-primary/5 focus:enabled:bg-primary/5 hover:enabled:text-primary dark:enabled:text-accent dark:hover:enabled:bg-accent/10 dark:focus:enabled:bg-accent/10"
  >
  </PButton>
  <OverlayPanel ref="op">
    <Listbox
      v-model="item"
      :options="items"
      @change="onItemChanged()"
      class="border-0 px-0 m-0 mx-0"
      :style="{ 'max-height': '250px', width: '15rem' }"
    >
      <template #option="prop">
        <div class="language-item flex items-center">
          <span :class="prop.option.icon"></span>
          <div class="ml-3 font-bold">{{ $t(`${prop.option.name}`) }}</div>
        </div>
      </template>
    </Listbox>
  </OverlayPanel>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import OverlayPanel from "primevue/overlaypanel";
import Listbox from "primevue/listbox";

import { useAppStore } from "@/stores/app.store";
import {
  THEME_MODE_SYSTEM,
  THEME_MODE_LIGHT,
  THEME_MODE_DARK,
  THEME_MODE_KEY,
} from "@/app/utils/constants";

const appStore = useAppStore();

const op = ref(null);

const item = ref();
const items = ref([
  {
    name: "data.themeModes.system",
    icon: "pi pi-desktop",
    value: THEME_MODE_SYSTEM,
  },
  {
    name: "data.themeModes.light",
    icon: "pi pi-sun",
    value: THEME_MODE_LIGHT,
  },
  {
    name: "data.themeModes.dark",
    icon: "pi pi-moon",
    value: THEME_MODE_DARK,
  },
]);
item.value = items.value[0];

onMounted(() => {
  item.value = items.value.find((val) => val.value === appStore.themeMode);
});

function onItemChanged() {
  appStore.setThemeMode(item.value.value);
  if (appStore.themeMode === THEME_MODE_SYSTEM) {
    window.localStorage.removeItem(THEME_MODE_KEY);
    loadTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  } else {
    window.localStorage.setItem(THEME_MODE_KEY, item.value.value);
    loadTheme(appStore.themeMode === THEME_MODE_DARK);
  }
}

const loadTheme = async (darkMode: boolean) => {
  if (darkMode) {
    await appStore.changeTheme(appStore.darkTheme);
  } else {
    await appStore.changeTheme(appStore.defaultTheme);
  }
};

const toggle = (event: Event) => {
  if (op.value != null) {
    //@ts-expect-error filled menu
    op.value.toggle(event);
  }
};
</script>
