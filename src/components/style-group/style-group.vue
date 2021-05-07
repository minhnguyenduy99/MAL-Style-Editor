<template>
  <div class="app-style-group">
    <div v-if="title" class="title-wrapper">
      <span>{{ title }}</span>
      <hr class="title-underline" />
    </div>
    <div class="content-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "StyleGroup",
  props: {
    title: String,
  },
};
</script>

<style lang="scss">
$title-color: var(--label-color);

.title {
  &-wrapper {
    text-align: left;

    span {
      font-weight: bold;
      color: $title-color;
    }
  }
  &-underline {
    margin: 10px 0;
  }
}
</style>
