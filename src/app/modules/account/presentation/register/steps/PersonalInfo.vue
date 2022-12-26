<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> {{ $t("views.auth.register.step1") }} </template>
      <template v-slot:subtitle>
        {{ $t("views.auth.register.step1-description") }}
      </template>
      <template v-slot:content>
        <div class="p-fluid">
          <div class="field my-4">
            <span class="p-float-label">
              <InputText
                id="first-name"
                v-model="state.firstName"
                :class="v$.firstName.$error ? 'p-invalid' : ''"
              />
              <label for="first-name">{{ $t("forms.labels.firstName") }}</label>
            </span>
            <small
              v-if="v$.firstName.$error"
              id="firstName-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>
          <div class="field my-4">
            <span class="p-float-label">
              <InputText
                id="last-name"
                v-model="state.lastName"
                :class="v$.lastName.$error ? 'p-invalid' : ''"
              />
              <label for="last-name">{{ $t("forms.labels.lastName") }}</label>
            </span>
            <small
              v-if="v$.lastName.$error"
              id="lastName-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>
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
                id="phone"
                type="tel"
                class="w-full"
                :class="v$.phone.$error ? 'p-invalid' : ''"
                v-model="state.phone"
              />
              <label for="phone">{{ $t("forms.labels.phone") }}</label>
            </span>
            <small v-if="v$.phone.$error" id="phone-help" class="p-error">{{
              $t("forms.errors.required.field")
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
        </div>
      </template>
      <template v-slot:footer>
        <div class="grid grid-nogutter justify-content-between">
          <i></i>
          <PButton
            :label="$t('forms.labels.next')"
            @click="nextPage()"
            icon="pi pi-angle-right"
            iconPos="right"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { defineEmits } from "vue";

import { useToast } from "primevue/usetoast";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";

import { MIN_PWD_LENGTH } from "@/app/utils/constants";

const $toast = useToast();
const emit = defineEmits(["next-page"]);
const $i18n = useI18n();

const state = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

// form validation rules
const rules = computed(() => ({
  firstName: { required },
  lastName: { required },
  email: { required, email },
  phone: { required },
  password: { required, minLength: minLength(MIN_PWD_LENGTH) },
  confirmPassword: { sameAsPassword: sameAs(ref(state.password)) },
}));

const v$ = useVuelidate(rules, state, { $autoDirty: true });

const nextPage = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    emit("next-page", {
      formData: {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        password: state.password,
        confirmPassword: state.confirmPassword,
      },
      pageIndex: 0,
    });
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
