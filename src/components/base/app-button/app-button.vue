<template>
  <button class="app-button" v-on="$listeners" v-bind="$attrs">
    <slot>
      {{ title }}
    </slot>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  inheritAttrs: false,
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss">
$button-background-color: var(--primary-color);
$button-text-color: rgb(255, 255, 255);
$button-border: 1px solid $button-background-color;

@import "./style.scss";
</style>
