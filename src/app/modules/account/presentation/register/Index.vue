<template>
  <div class="grid grid-cols-12 h-screen bg-white">
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
            <h1 class="text-5xl">
              {{ $t("views.auth.register.welcome.title") }}
            </h1>
            <p>
              {{ $t("views.auth.register.welcome.detail") }}
            </p>
          </template>
        </Card>
      </div>
    </div>
    <div
      class="col-span-12 md:col-span-7 lg:col-span-8 p-0 h-screen pt-8 overflow-y-scroll"
    >
      <GuestAppBar />
      <div
        class="px-2 md:px-4 lg:px-8 py-4 min-h-full w-full flex flex-col items-center justify-center"
      >
        <img src="/src/assets/logo.svg" alt="Logo" class="w-48 -mb-6" />
        <RegisterForm class="w-full lg:w-6/12"></RegisterForm>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import RegisterForm from "@/app/modules/account/presentation/register/RegisterForm.vue";
import GuestAppBar from "@/shared/layouts/GuestAppBar.vue";
</script>

<style scoped>
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #162c4faa;
}
</style>
