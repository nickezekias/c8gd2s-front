<script setup lang="ts">
import { RouterView } from "vue-router";
import Toast from "primevue/toast";
import ScreenLoader from "./components/loaders/ScreenLoader.vue";
</script>

<template>
  <RouterView class="w-screen min-h-screen" />
  <Toast />
  <ScreenLoader />
</template>
