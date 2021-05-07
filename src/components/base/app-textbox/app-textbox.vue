<template>
  <input
    v-model.lazy="_value"
    class="app-input"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
export default {
  name: "AppTextbox",
  inheritAttrs: false,
  props: {
    value: String,
  },
  model: {
    prop: "value",
    event: "changed",
  },
  computed: {
    _value: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("changed", val);
      },
    },
  },
};
</script>

<style scoped>
.app-input {
  padding: 5px 7px;
}
</style>
