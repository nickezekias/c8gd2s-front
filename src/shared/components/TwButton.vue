<!-- Created on : 2022/12/16 - 04:31:42 -->
<template>
  <button
    type="button"
    class="px-5 py-3 focus:outline-none font-semibold cursor-pointer"
    :class="
      buttonType == BUTTON_TYPE_FILLED
        ? `border-none bg-${color}-600 text-white hover:bg-${color}-700 dark:bg-${darkColor}-600 dark:hover:bg-${darkColor}-700`
        : buttonType == BUTTON_TYPE_OUTLINED
        ? `bg-transparent border-2 border-${color}-600 border-solid text-${color}-600 hover:bg-${color}-600 hover:text-white dark:border-${darkColor}-600 dark:text-${darkColor}-600 dark:hover:bg-${darkColor}-600 dark:focus:bg-${darkColor}-600 dark:hover:text-white`
        : buttonType == BUTTON_TYPE_TEXT
        ? `border-none bg-transparent text-${color}-600 hover:bg-${color}-600 hover:text-white dark:bg-transparent dark:text-${darkColor}-600 dark:hover:bg-${darkColor}-600 dark:focus:bg-${darkColor}-600 dark:hover:text-white`
        : ``
    "
  >
    <slot>
      <div
        class="flex items-center justify-center"
        :class="iconPos == 'right' ? 'flex-row-reverse' : ''"
      >
        <i :class="iconPos == 'right' ? `${icon} ml-2` : `${icon} mr-2`"></i>
        <span>
          {{ label }}
        </span>
      </div>
    </slot>
  </button>
</template>

<script setup lang="ts">
const BUTTON_TYPE_FILLED = "filled";
const BUTTON_TYPE_OUTLINED = "outlined";
const BUTTON_TYPE_TEXT = "text";

defineProps({
  to: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "primary",
  },
  darkColor: {
    type: String,
    default: "accent",
  },
  icon: {
    type: String,
  },
  iconPos: {
    type: String,
    default: "left",
  },
  label: {
    type: String,
  },
  buttonType: {
    type: String,
  },
});
</script>
