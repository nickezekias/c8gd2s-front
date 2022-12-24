<template>
  <div class="fixed w-full top-2 flex justify-center left-0 z-50">
    <Toolbar class="py-1 shadow-2xl rounded-full w-11/12">
      <template #start> </template>

      <template #end>
        <NavLink
          to="/login"
          class="p-button-sm bg-transparent text-primary hover:bg-primary/5 mr-2 dark:text-accent dark:hover:bg-accent/10"
          exactActiveClass="bg-primary/5 dark:bg-accent/10"
        >
          <span class="pi pi-lock-open mr-2"></span>
          {{ $t("views.layouts.login") }}
        </NavLink>

        <NavLink
          to="/register"
          class="p-button-sm bg-transparent text-primary hover:bg-primary/5 dark:text-accent dark:hover:bg-accent/10 mr-2"
          exactActiveClass="bg-primary/5 dark:bg-accent/10"
        >
          <span class="pi pi-user-plus mr-2"></span>
          {{ $t("views.layouts.register") }}
        </NavLink>
        <ThemeModeMenu />
        <LanguageMenu></LanguageMenu>
      </template>
    </Toolbar>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import LanguageMenu from "@/shared/components/LanguageMenu.vue";
import ThemeModeMenu from "../components/ThemeModeMenu.vue";
</script>
