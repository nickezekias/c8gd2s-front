<!-- Created on : 2022/12/16 - 01:22:48 -->
<template>
  <div class="grid grid-cols-12 h-screen">
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
            <h1 class="text-5xl">
              {{ $t("views.auth.forgotPassword.welcome.title") }}
            </h1>
            <p>
              {{ $t("views.auth.forgotPassword.welcome.detail") }}
            </p>
          </template>
        </Card>
      </div>
    </div>
    <div
      class="col-span-12 md:col-span-7 lg:col-span-8 p-0 h-screen pt-8 overflow-y-scroll"
    >
      <div
        class="px-2 md:px-4 lg:px-8 py-4 min-h-full w-full flex flex-col items-center justify-center"
      >
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
        <Transition name="slide-fade">
          <ForgotPasswordForm
            @nextPage="
              () => {
                step++;
              }
            "
            v-if="step == 0"
            class="w-full lg:w-6/12"
          ></ForgotPasswordForm>
          <EmailSentConfirmation v-else class="w-full lg:w-6/12" />
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GuestAppBar from "@/app/shared/layouts/GuestAppBar.vue";
import { ref } from "vue";
import EmailSentConfirmation from "./EmailSentConfirmation.vue";
import ForgotPasswordForm from "./ForgotPasswordForm.vue";

const step = ref(0);
</script>

<style scoped>
.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #162c4faa;
}
</style>
