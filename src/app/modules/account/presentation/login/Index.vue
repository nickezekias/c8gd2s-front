<template>
  <div class="grid grid-cols-12 h-screen bg-white">
    <GuestAppBar />
    <div
      class="hidden md:block md:col-span-5 lg:col-span-4 h-full bg-primary p-0 relative"
    >
      <div
        class="img h-full bg-cover"
        style="
          background-image: url('https://images.pexels.com/photos/8152734/pexels-photo-8152734.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260/');
        "
      ></div>
      <div
        class="overlay-content flex items-center justify-center h-full w-full"
      >
        <Card class="bg-transparent text-white text-center shadow-none">
          <template #content>
            <h1 class="text-5xl">{{ $t("views.auth.login.welcome.title") }}</h1>
            <p>
              {{ $t("views.auth.login.welcome.detail") }}
            </p>
          </template>
        </Card>
      </div>
    </div>
    <div
      class="main-guest-content col-span-12 md:col-span-7 lg:col-span-8 p-0 h-screen overflow-y-scroll"
    >
      <div
        class="px-2 md:px-4 lg:px-8 pb-8 w-full flex flex-col items-center justify-center"
      >
        <div>
          <img
            src="/src/assets/logo.svg"
            alt="Logo"
            class="dark:hidden w-48 -mb-6"
          />
          <img
            src="/src/assets/logolight.png"
            alt="Logo"
            class="hidden dark:block w-72 -mb-6"
          />
        </div>
        <LoginForm class="w-full lg:w-6/12"></LoginForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GuestAppBar from "@/app/shared/layouts/GuestAppBar.vue";
import LoginForm from "@/app/modules/account/presentation/login/LoginForm.vue";
</script>

<style scoped>
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #162c4faa;
}
</style>
