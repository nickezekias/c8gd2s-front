<template>
  <Button
    type="button"
    @click="toggle"
    aria-haspopup="true"
    aria-controls="overlay_menu"
    class="language-button border-3 border-solid border-blue-300 border-circle"
  >
    <img
      alt="logo"
      :src="`/src/assets/flags/1x1/${language?.flag}`"
      style="width: 4rem"
    />
  </Button>
  <OverlayPanel ref="languageOp">
    <Listbox
      :options="languages"
      v-model="language"
      @change="onLanguageChanged()"
      class="border-0 px-0 m-0 mx-0"
      optionLabel="name"
      :style="{ 'max-height': '250px', width: '15rem' }"
    >
      <template #option="prop">
        <div class="language-item flex items-center">
          <img
            :src="'/src/assets/flags/4x3/' + prop.option.flag"
            style="width: 1.5rem"
          />
          <div class="ml-3 font-bold">{{ $t(`${prop.option.label}`) }}</div>
        </div>
      </template>
    </Listbox>
  </OverlayPanel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import OverlayPanel from "primevue/overlaypanel";
import Listbox from "primevue/listbox";
import { useI18n } from "vue-i18n";
import { useAppStore } from "@/stores/app";

const appStore = useAppStore();

const i18n = useI18n();

const languageOp = ref(null);

const language = ref();
const languages = ref([
  {
    label: "data.languages.english",
    flag: "us.svg",
    code: "us",
  },
  {
    label: "data.languages.french",
    flag: "fr.svg",
    code: "fr",
  },
]);
language.value = languages.value[0];

const toggle = (event: Event) => {
  if (languageOp.value != null) {
    //@ts-expect-error filled menu
    languageOp.value.toggle(event);
  }
};

function changeAppLocale(locale: string) {
  i18n.locale.value = locale;
}

function onLanguageChanged() {
  changeAppLocale(language.value.code);
  appStore.showScreenLoader(true, 1000);
  // appStore.setScreenLoaderDuration(3000);
}
</script>

<style>
.language-button {
  border-radius: 100%;
  padding: 0;
  min-width: 2.7rem;
  width: 2.7rem;
  height: 2.7rem;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #5b7ade2f;
}
</style>
