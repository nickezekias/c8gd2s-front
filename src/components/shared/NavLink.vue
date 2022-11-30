<template>
  <RouterLink
    :to="to as RouteLocationRaw"
    class="p-button router-link hover:outline-none active:outline-none outline-none"
    :class="
      buttonType == 'text'
        ? 'p-button-text p-button-plain hover:bg-primary-50 hover:text-primary active:bg-primary-50 active:text-primary'
        : ''
    "
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps({
  to: {
    type: String,
    required: true,
  },
  buttonType: {
    type: String,
    default: "text",
  },
});
</script>

<style scoped>
.router-link {
  text-decoration: none;
}
.router-link-active {
  color: var(--primary-color) !important;
  background-color: var(--blue-50) !important;
}
</style>
