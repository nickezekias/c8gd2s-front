<template>
  <div class="fixed w-full top-2 flex justify-center left-0 z-50">
    <Toolbar class="py-1 shadow-lg rounded-full w-11/12">
      <template #start> </template>

      <template #end>
        <NavLink to="/login" class="mr-2 my-auto p-button-sm">
          <span class="pi pi-lock-open mr-2"></span>
          {{ $t("views.layouts.login") }}
        </NavLink>

        <NavLink to="/register" class="mr-4 p-button-sm">
          <span class="pi pi-user-plus mr-2"></span>
          {{ $t("views.layouts.register") }}
        </NavLink>
        <LanguageMenu></LanguageMenu>
      </template>
    </Toolbar>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import LanguageMenu from "@/shared/components/LanguageMenu.vue";
</script>

<style scoped>
.p-toolbar {
  /* border-radius: 0; */
}
</style>
