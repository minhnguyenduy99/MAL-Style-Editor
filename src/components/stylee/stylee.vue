<template>
  <selectable v-bind="$attrs" v-on="$listeners" class="stylee">
    <slot v-bind="$slots.default"></slot>
  </selectable>
</template>

<script>
export default {
  name: "Stylee",
  inheritAttrs: false,
  props: {
    className: {
      type: String,
      default: () => "",
    },
    currentStyle: {
      type: Object,
      default: () => ({
        margin: "0 10px",
      }),
    },
  },
  data: () => ({
    element: null,
  }),
  mounted: function () {
    this.element = this.$el.getElementsByClassName(this.className);
    if (!this.element) {
      return;
    }
    this.element.style = this.currentStyle;
  },
};
</script>
