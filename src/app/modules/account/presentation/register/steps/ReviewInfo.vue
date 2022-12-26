<!-- Created on : 2022/12/26 - 16:30:49 -->
<template>
  <Card>
    <template v-slot:title> {{ $t("views.auth.register.step4") }} </template>
    <template v-slot:subtitle>
      {{ $t("views.auth.register.step4-description") }}
    </template>
    <template #content>
      <div>
        <h5 class="text-gray-700">{{ $t("views.auth.register.step1") }}</h5>
        <div class="field">
          <label for="first-name" class="text-sm">{{
            $t("forms.labels.firstName")
          }}</label>
          <span class="flex font-medium">{{ formData.firstName || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="first-name" class="text-sm">{{
            $t("forms.labels.lastName")
          }}</label>
          <span class="flex font-medium">{{ formData.lastName || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="first-name" class="text-sm">{{
            $t("forms.labels.email")
          }}</label>
          <span class="flex font-medium">{{ formData.email || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="first-name" class="text-sm">{{
            $t("forms.labels.phone")
          }}</label>
          <span class="flex font-medium">{{ formData.phone || "-" }}</span>
        </div>
      </div>

      <div>
        <h5 class="text-gray-700">{{ $t("views.auth.register.step2") }}</h5>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.labels.name")
          }}</label>
          <span class="flex font-medium">{{ formData.bizName || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.labels.description")
          }}</label>
          <span class="flex font-medium">{{
            formData.bizDescription || "-"
          }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.labels.website")
          }}</label>
          <span class="flex font-medium">{{ formData.bizWebsite || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.labels.yearFounded")
          }}</label>
          <span class="flex font-medium">{{
            formData.bizYearFounded || "-"
          }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectIndustry")
          }}</label>
          <span class="flex font-medium">{{
            formData.bizIndustry || "-"
          }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectCompanySize")
          }}</label>
          <span class="flex font-medium">{{
            formData.bizCompanySize || "-"
          }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectCompanyType")
          }}</label>
          <span class="flex font-medium">{{
            formData.bizCompanyType || "-"
          }}</span>
        </div>
      </div>

      <div>
        <h5 class="text-gray-700">{{ $t("views.auth.register.step3") }}</h5>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectCurrency")
          }}</label>
          <span class="flex font-medium">{{ formData.wsCurrency || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectTimezone")
          }}</label>
          <span class="flex font-medium">{{ formData.wsTimezone || "-" }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectTimeFormat")
          }}</label>
          <span class="flex font-medium">{{
            formData.wsTimeFormat || "-"
          }}</span>
        </div>
        <div class="field mt-4">
          <label for="name" class="text-sm">{{
            $t("forms.placeholders.selectDateFormat")
          }}</label>
          <span class="flex font-medium">{{
            formData.wsDateFormat || "-"
          }}</span>
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
          :label="$t('forms.labels.register')"
          @click="complete()"
          icon="pi pi-angle-right"
          iconPos="right"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
const emit = defineEmits(["prev-page", "complete"]);
defineProps<{
  formData: Record<string, unknown>;
}>();

const prevPage = () => {
  emit("prev-page", { pageIndex: 3 });
};

const complete = () => {
  emit("complete");
};
</script>
