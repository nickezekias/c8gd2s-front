<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen bg-white flex justify-content-center align-items-center"
    :style="
      appStore.isShowScreenLoader
        ? 'display: flex!important;'
        : 'display: none!important'
    "
  >
    <img src="/src/assets/loader.gif" alt="loader" />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app.store";

const appStore = useAppStore();
</script>
