<template>
  <div>
    <div class="card">
      <Steps :model="items" :readonly="true" aria-label="Form Steps" />
    </div>
    <RouterView
      v-slot="{ Component }"
      :formData="formObject"
      @prevPage="prevPage($event)"
      @nextPage="nextPage($event)"
      @complete="complete"
    >
      <KeepAlive>
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import Steps from "primevue/steps";

const router = useRouter();
const toast = useToast();
const $i18n = useI18n();
const items = ref([
  {
    label: $i18n.t("views.auth.register.step1"),
    to: "/register",
  },
  {
    label: $i18n.t("views.auth.register.step2"),
    to: "/register/business-information",
  },
  {
    label: $i18n.t("views.auth.register.step3"),
    to: "/register/workspace",
  },
]);
const formObject: any = ref({});
const nextPage = (event: any) => {
  for (let field in event.formData) {
    formObject.value[field] = event.formData[field];
  }

  router.push(items.value[event.pageIndex + 1].to);
};
const prevPage = (event: any) => {
  console.log("items", items.value);
  console.log("Event", event);
  router.push(items.value[event.pageIndex - 1].to);
};
const complete = () => {
  toast.add({
    severity: "success",
    summary: "Order submitted",
    detail:
      "Dear," +
      formObject.value.firstname +
      " " +
      formObject.value.lastname +
      " your order completed.",
  });
};
</script>

<style scoped lang="scss">
::v-deep(b) {
  display: block;
}

::v-deep(.p-card-body) {
  padding: 2rem;
}
</style>
