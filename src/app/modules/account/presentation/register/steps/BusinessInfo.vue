<template>
  <div class="stepsdemo-content">
    <Card>
      <template v-slot:title> {{ $t("views.auth.register.step2") }} </template>
      <template v-slot:subtitle>
        {{ $t("views.auth.register.step2-description") }}
      </template>
      <template v-slot:content>
        <div class="p-fluid">
          <div class="field my-4">
            <span class="p-float-label">
              <InputText
                id="name"
                v-model="state.name"
                :class="v$.name.$error ? 'p-invalid' : ''"
              />
              <label for="name">{{ $t("forms.labels.name") }}</label>
            </span>
            <small v-if="v$.name.$error" id="name-help" class="p-error">{{
              $t("forms.errors.required.field")
            }}</small>
          </div>

          <div class="field my-4">
            <span class="p-float-label">
              <InputText
                id="description"
                v-model="state.description"
                :class="v$.description.$error ? 'p-invalid' : ''"
              />
              <label for="description">{{
                $t("forms.labels.description")
              }}</label>
            </span>
            <small
              v-if="v$.description.$error"
              id="description-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <span class="p-float-label">
              <InputText
                id="website"
                v-model="state.website"
                :class="v$.website.$error ? 'p-invalid' : ''"
              />
              <label for="website">{{ $t("forms.labels.website") }}</label>
            </span>
            <small v-if="v$.website.$error" id="website-help" class="p-error">{{
              $t("forms.errors.required.field")
            }}</small>
          </div>

          <div class="field my-4">
            <span class="p-float-label">
              <InputText
                id="year-founded"
                v-model="state.yearFounded"
                :class="v$.yearFounded.$error ? 'p-invalid' : ''"
              />
              <label for="year-founded">{{
                $t("forms.labels.yearFounded")
              }}</label>
            </span>
            <small
              v-if="v$.yearFounded.$error"
              id="yearFounded-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <Dropdown
              v-model="state.industry"
              :options="industries"
              optionLabel="label"
              :class="v$.industry.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectIndustry')"
            />
            <small
              v-if="v$.industry.$error"
              id="industry-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <Dropdown
              v-model="state.companySize"
              :options="industries"
              optionLabel="label"
              :class="v$.companySize.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectCompanySize')"
            />
            <small
              v-if="v$.companySize.$error"
              id="companySize-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>

          <div class="field my-4">
            <Dropdown
              v-model="state.companyType"
              :options="industries"
              optionLabel="label"
              :class="v$.companyType.$error ? 'p-invalid' : ''"
              :placeholder="$t('forms.placeholders.selectCompanyType')"
            />
            <small
              v-if="v$.companyType.$error"
              id="companyType-help"
              class="p-error"
              >{{ $t("forms.errors.required.field") }}</small
            >
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="flex justify-between">
          <Button
            :label="$t('forms.labels.back')"
            @click="prevPage()"
            icon="pi pi-angle-left"
          />
          <Button
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
  name: "",
  description: "",
  website: "",
  yearFounded: "",
  industry: "",
  companySize: "",
  companyType: "",
});

// form validation rules
const rules = computed(() => ({
  name: { required },
  description: { required },
  website: {},
  yearFounded: { required },
  industry: { required },
  companySize: { required },
  companyType: { required },
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
  emit("prev-page", { pageIndex: 1 });
};

const nextPage = async () => {
  const isFormValid = await v$.value.$validate();
  if (isFormValid) {
    emit("next-page", {
      formData: {
        bizName: state.name,
        bizDescription: state.description,
        bizWebsite: state.website,
        bizYearFounded: state.yearFounded,
        bizIndustry: state.industry,
        bizCompanySize: state.companySize,
        bizCompanyType: state.companyType,
      },
      pageIndex: 1,
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
