<template>
  <RouterLink
    :to="(to as RouteLocationRaw)"
    class="p-button router-link hover:outline-none active:outline-none outline-none"
    :exact-active-class="exactActiveClass"
    :active-class="activeClass"
  >
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps({
  activeClass: {
    type: String,
  },
  exactActiveClass: {
    type: String,
  },
  to: {
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
</style>
