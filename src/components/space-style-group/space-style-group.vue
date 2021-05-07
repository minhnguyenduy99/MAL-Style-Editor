<template>
  <style-group v-bind="$attrs" v-on="$listeners" class="space-style-group">
    <template>
      <div class="space-style-container">
        <space-styler
          v-for="type in types"
          :key="type.id"
          :type="type"
          :title="STYLER_TITLE_MAPPING[type]"
          :value="styles[type]"
        />
      </div>
    </template>
  </style-group>
</template>

<script>
import { SpaceStyleBuilder } from "@/lib";

export default {
  name: "SpaceStyleGroup",
  inheritAttrs: false,
  props: {
    styles: {
      type: Object,
      default: () => {},
    },
    types: {
      type: Array,
      default: () => ["margin", "padding", "height", "width"],
    },
  },
  provide() {
    return {
      builder: this.builder,
    };
  },
  data: () => ({
    STYLER_TITLE_MAPPING: {
      margin: "Margin",
      padding: "Padding",
      width: "Width",
      height: "Height",
    },
    builder: new SpaceStyleBuilder(),
  }),
  mounted: function () {
    console.log(this.styles);
  },
  methods: {
    $build() {
      return this.builder.build();
    },
  },
};
</script>

<style lang="scss" scoped>
.space-style-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
</style>
