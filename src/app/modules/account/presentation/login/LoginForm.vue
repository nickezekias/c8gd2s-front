<template>
  <Card class="shadow-none">
    <!-- <template #title>
      <h1 class="text-6xl mb-0">{{ $t("auth.headers.login") }}</h1>
    </template> -->
    <template #content>
      <div class="field my-4">
        <span class="p-float-label">
          <InputText
            id="email"
            type="email"
            class="w-full"
            :class="v$.email.$error ? 'p-invalid' : ''"
            v-model="state.email"
          />
          <label for="email">{{ $t("forms.labels.email") }}</label>
        </span>
        <small v-if="v$.email.$error" id="email-help" class="p-error">{{
          $t("forms.errors.invalid.email")
        }}</small>
      </div>
      <div class="field my-4">
        <span class="p-float-label">
          <InputText
            id="password"
            type="password"
            class="w-full"
            :class="v$.password.$error ? 'p-invalid' : ''"
            v-model="state.password"
          />
          <label for="password">{{ $t("forms.labels.password") }}</label>
          <small v-if="v$.password.$error" id="password-help" class="p-error">{{
            $t("forms.errors.required.field")
          }}</small>
        </span>
      </div>
      <div class="field my-6">
        <Button
          label="Forgot Password"
          icon="pi pi-lock"
          class="p-button-text p-button-sm bg-primary"
        />
      </div>
      <div class="field">
        <Button
          @click="submit"
          :label="$t(`auth.labels.login`)"
          class="w-full py-3 bg-primary p-button-lg"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import { getApiErrors } from "@/app/utils/helpers";
import type { AxiosError } from "axios";
import { useToast } from "primevue/usetoast";

import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

const $toast = useToast();

const state = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required },
};

const v$ = useVuelidate(rules, state, { $autoDirty: true });

const authStore = useAuthStore();

async function submit(): Promise<void> {
  try {
    const isFormCorrect = await v$.value.$validate();
    if (isFormCorrect) {
      await authStore.login({ email: "you@gmail.com", password: "password" });
    } else {
      $toast.add({
        severity: "error",
        summary: "Form Invalid",
        detail: "Please fill out the form correctly",
        life: 5000,
      });
    }
  } catch (e) {
    getApiErrors(e as AxiosError);
  }
}
</script>
