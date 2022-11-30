<template>
  <div class="grid h-screen">
    <div class="col-12 md:col-4 lg:col-3 h-full bg-primary p-0">
      <div
        class="img h-full bg-cover"
        style="
          background-image: url('https://images.pexels.com/photos/8152734/pexels-photo-8152734.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260/');
        "
      ></div>
    </div>
    <div class="col-12 md:col-8 lg:col-9 p-0 h-full overflow-y-scroll">
      <Toolbar class="py-1 border-bottom-1 border-200">
        <template #start> </template>

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
      </Toolbar>
      <div
        class="px-4 py-8 md:px-6 lg:px-8 min-h-full w-full flex flex-column align-items-center"
      >
        <img src="/src/assets/logo.svg" alt="Logo" class="w-16rem -mb-6" />
        <LoginForm class="w-30rem"></LoginForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import LoginForm from "@/components/auth/LoginForm.vue";
</script>

<style scoped>
.p-toolbar {
  border-radius: 0;
}
</style>
