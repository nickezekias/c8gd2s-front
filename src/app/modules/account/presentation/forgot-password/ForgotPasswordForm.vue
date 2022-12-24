<!-- Created on : 2022/12/16 - 01:33:50 -->
<template>
  <TwCard>
    <form>
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
    </form>
    <template v-slot:footer>
      <div class="grid justify-content-between">
        <PButton
          :label="$t('forms.labels.resetPassword')"
          @click="nextPage()"
          icon="pi pi-angle-right"
          iconPos="right"
          class="bg-primary"
        />
      </div>
    </template>
  </TwCard>
</template>

<script setup lang="ts">
import { defineEmits, reactive } from "vue";

import { useToast } from "primevue/usetoast";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";

const $toast = useToast();
const emit = defineEmits(["next-page"]);
const $i18n = useI18n();

const state = reactive({
  email: "",
});

const rules = {
  email: { required, email },
};

const v$ = useVuelidate(rules, state, { $autoDirty: true });

const nextPage = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    emit("next-page", {
      formData: {
        email: state.email,
      },
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
