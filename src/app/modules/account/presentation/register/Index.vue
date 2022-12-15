<template>
  <div class="grid h-screen bg-white">
    <div
      class="col-12 md:col-5 lg:col-3 hidden md:block h-full bg-primary p-0 relative"
    >
      <div
        class="img h-full bg-cover"
        style="
          background-image: url('https://images.pexels.com/photos/8152734/pexels-photo-8152734.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260/');
        "
      ></div>
      <div
        class="overlay-content flex align-items-center justify-content-center h-full w-full"
      >
        <Card class="bg-transparent text-white text-center shadow-none">
          <template #content>
            <h1 class="text-4xl text-5xl">Welcome Back</h1>
            <p>
              Connecting Dots is your platform to find suitable partners and
              financiers.
            </p>
          </template>
        </Card>
      </div>
    </div>
    <div class="col-12 md:col-7 lg:col-9 p-0 h-screen overflow-y-scroll">
      <Toolbar class="py-1 border-bottom-1 border-400">
        <template #start> </template>

        <template #end>
          <NavLink to="/login" class="mr-2 my-auto">
            <span class="pi pi-lock mr-2"></span>
            Login
          </NavLink>

          <NavLink to="/register" class="mr-4">
            <span class="pi pi-user mr-2"></span>
            Register
          </NavLink>
          <LanguageMenu></LanguageMenu>
        </template>
      </Toolbar>
      <div
        class="px-2 md:px-4 lg:px-8 py-4 min-h-full w-full flex flex-column align-items-center justify-content-center"
      >
        <img src="/src/assets/logo.svg" alt="Logo" class="w-16rem -mb-6" />
        <RegisterForm class="w-full lg:w-30rem"></RegisterForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import RegisterForm from "@/app/modules/account/presentation/register/RegisterForm.vue";
import LanguageMenu from "@/components/shared/LanguageMenu.vue";
</script>

<style scoped>
.p-toolbar {
  border-radius: 0;
}
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #162c4faa;
}
</style>
