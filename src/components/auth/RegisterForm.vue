<template>
  <div>
    <div class="card">
      <Steps :models="items" :readonly="true" aria-label="Form Steps" />
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
import Steps from "primevue/steps";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";

const router = useRouter();
const toast = useToast();
const items = ref([
  {
    label: "First",
    to: "/steps",
  },
  {
    label: "Second",
    to: "/steps/second",
  },
  {
    label: "Third",
    to: "/steps/third",
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

<style scoped>
::v-deep(b) {
  display: block;
}

::v-deep(.p-card-body) {
  padding: 2rem;
}
</style>
