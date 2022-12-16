<!-- Created on : 2022/12/16 - 02:04:50 -->
<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-16 h-16 dark:text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
      />
    </svg>

    <h5
      class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
    >
      {{ $t("views.auth.forgotPassword.emailSent.title") }}
    </h5>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
      {{ $t("views.auth.forgotPassword.emailSent.detail") }}
    </p>
    <Button
      :label="$t('forms.labels.backToLogin')"
      @click="$router.push('/login')"
      icon="pi pi-angle-left"
      class="bg-primary dark:bg-blue-600"
    />
  </div>
</template>

<script setup lang="ts"></script>
