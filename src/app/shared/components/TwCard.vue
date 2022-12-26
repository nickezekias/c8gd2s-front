<!-- Created on : 2022/12/21 - 13:33:33 -->
<template>
  <div
    class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
  >
    <slot></slot>
    <div class="mt-4">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
