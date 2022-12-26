<!-- Created on : 2022/12/16 - 01:33:50 -->
<template>
  <Card>
    <template #content>
      <form>
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
            <small
              v-if="v$.password.$error"
              id="password-help"
              class="p-error"
              >{{ $t("forms.errors.password.minPasswordCount") }}</small
            >
          </span>
        </div>
        <div class="field my-4">
          <span class="p-float-label">
            <InputText
              id="confirm-password"
              type="password"
              class="w-full"
              :class="v$.confirmPassword.$error ? 'p-invalid' : ''"
              v-model="state.confirmPassword"
            />
            <label for="confirm-password">{{
              $t("forms.labels.confirmPassword")
            }}</label>
            <small
              v-if="v$.confirmPassword.$error"
              id="confirmPassword-help"
              class="p-error"
              >{{ $t("forms.errors.password.notSame") }}</small
            >
          </span>
        </div>
      </form>
    </template>
    <template v-slot:footer>
      <div class="grid justify-content-between">
        <PButton
          :label="$t('forms.labels.resetPassword')"
          @click="nextPage()"
          icon="pi pi-angle-right"
          iconPos="right"
          class="w-full py-3 bg-primary dark:bg-accent hover:enabled:bg-primary-700 dark:hover:enabled:bg-accent-700 focus:enabled:bg-primary-700 dark:focus:enabled:bg-accent-700"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { computed, defineEmits, reactive, ref } from "vue";

import { useToast } from "primevue/usetoast";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
import { MIN_PWD_LENGTH } from "@/app/utils/constants";
import { useRouter } from "vue-router";

const $toast = useToast();
const emit = defineEmits(["next-page"]);
const $i18n = useI18n();
const $router = useRouter();

const state = reactive({
  password: "",
  confirmPassword: "",
});

// form validation rules
const rules = computed(() => ({
  password: { required, minLength: minLength(MIN_PWD_LENGTH) },
  confirmPassword: { sameAsPassword: sameAs(ref(state.password)) },
}));

const v$ = useVuelidate(rules, state, { $autoDirty: true });

const nextPage = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    $toast.add({
      severity: "success",
      summary: $i18n.t("views.auth.resetPassword.success.title"),
      detail: $i18n.t("views.auth.resetPassword.success.detail"),
      life: 5000,
    });
    window.setTimeout(() => {
      $router.push({ name: "Login" });
    }, 6000);
  } else {
    $toast.add({
      severity: "error",
      summary: $i18n.t("forms.messages.formInvalid.title"),
      detail: $i18n.t("forms.messages.formInvalid.detail"),
      life: 5000,
    });
  }
};
</script>
