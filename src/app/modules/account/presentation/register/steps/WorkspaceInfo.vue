<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> {{ $t("views.auth.register.step3") }} </template>
      <template v-slot:subtitle>
        {{ $t("views.auth.register.step3-description") }}
      </template>
      <template v-slot:content>
        <div class="p-fluid">
          <div class="field my-4">
            <Dropdown
              v-model="state.currency"
              :options="industries"
              optionLabel="label"
              :class="v$.currency.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectCurrency')"
            />
            <small
              v-if="v$.currency.$error"
              id="currency-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <Dropdown
              v-model="state.timezone"
              :options="industries"
              optionLabel="label"
              :class="v$.timezone.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectTimezone')"
            />
            <small
              v-if="v$.timezone.$error"
              id="timezone-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <Dropdown
              v-model="state.timeFormat"
              :options="industries"
              optionLabel="label"
              :class="v$.timeFormat.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectTimeFormat')"
            />
            <small
              v-if="v$.timeFormat.$error"
              id="timeFormat-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <Dropdown
              v-model="state.dateFormat"
              :options="industries"
              optionLabel="label"
              :class="v$.dateFormat.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectDateFormat')"
            />
            <small
              v-if="v$.dateFormat.$error"
              id="dateFormat-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="flex justify-between">
          <PButton
            :label="$t('forms.labels.back')"
            @click="prevPage()"
            icon="pi pi-angle-left"
          />
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
import { required } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";

const $toast = useToast();
const emit = defineEmits(["next-page", "prev-page"]);
const $i18n = useI18n();

const state = reactive({
  currency: "",
  timezone: "",
  timeFormat: "",
  dateFormat: "",
});

// form validation rules
const rules = computed(() => ({
  currency: { required },
  timezone: { required },
  timeFormat: { required },
  dateFormat: { required },
}));

const industries = ref([
  {
    label: "Energy",
    id: 1,
  },
  {
    label: "Education",
    id: 2,
  },
  {
    label: "Agriculture",
    id: 3,
  },
]);

const v$ = useVuelidate(rules, state, { $autoDirty: true });

const prevPage = () => {
  emit("prev-page", { pageIndex: 2 });
};

const nextPage = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    emit("next-page", {
      formData: {
        wsCurrency: state.currency,
        wsTimezone: state.timezone,
        wsTimeFormat: state.timeFormat,
        wsDateFormat: state.dateFormat,
      },
      pageIndex: 2,
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

const submit = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    alert("Registered");
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
