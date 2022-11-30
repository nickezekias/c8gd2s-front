<template>
  <div class="h-full">
    <!-- <Toolbar>
      <template #start>
        <span class="mr-2">Connecting Dots</span>
      </template>

      <template #end>
        <NavLink to="/login" class="mr-2 my-auto">
          <span class="pi pi-lock mr-2"></span>
          Login
        </NavLink>

        <NavLink to="/register">
          <span class="pi pi-user mr-2"></span>
          Register
        </NavLink>
      </template>
    </Toolbar> -->

    <main class="pt-2">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "primevue/toolbar";
</script>

<style scoped>
.p-toolbar {
  background-color: transparent;
  height: var(--guest-toolbar-height);
  border-radius: 0;
  padding-top: 8px;
  padding-bottom: 8px;
}

.router-link {
  text-decoration: none !important;
}

main {
  min-height: calc(100vh - 48px);
}
</style>
