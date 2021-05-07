<template>
  <component
    :is="tag"
    class="selectable tooltip"
    @mouseenter="$on_mouseEnter"
    @click.stop="$on_selected"
  >
    <span class="tooltip-text" ref="tooltip">{{ elementName }}</span>
    <slot :style="elementStyles"></slot>
  </component>
</template>

<script>
import { mapGetters } from "vuex";
import selectable from "./selectable.js";

export default {
  name: "Selectable",
  props: {
    elementName: String,
    tag: {
      type: String,
      default: () => "div",
    },
    size: {
      type: String,
      default: () => "large",
      validator: (val) => ["small", "large"].includes(val),
    },
    styleGroup: String,
  },
  data: () => ({
    elementStyles: {},
  }),
  watch: {
    lastUpdated({ element }) {
      if (element !== this.elementName) {
        return;
      }
      const style = this.element(this.elementName) ?? {};
      this.$_updateStyle(style);
    },
  },
  computed: {
    ...mapGetters("ES", ["lastUpdated", "element"]),
    tooltip() {
      return this.$refs.tooltip;
    },
  },
  mounted: function () {
    if (this.size === "small") {
      this.tooltip.classList.add("--small");
    }
  },
  methods: {
    $on_selected() {
      this.$el.classList.add("selectable--selected");
      this.tooltip.classList.add("tooltip-text--selected");
      selectable.select(this);
    },
    $on_unselect() {
      this.$el.classList.remove("selectable--selected");
      this.tooltip.classList.remove("tooltip-text--selected");
    },
    $on_mouseEnter() {
      this.$el.classList.add("selectable--hover");
      this.tooltip.classList.add("tooltip-text--hover");
      selectable.enter(this);
    },
    $on_mouseleave() {
      this.$el.classList.remove("selectable--hover");
      this.tooltip.classList.remove("tooltip-text--hover");
    },
    $_updateStyle(styleGroup) {
      const styles = Object.values(styleGroup).reduce(
        (previous, current) => ({
          ...previous,
          ...current,
        }),
        {}
      );
      for (let attr in styles) {
        const element = this.$slots.default[0]?.componentInstance?.$el ?? this.$el;
        element.style[attr] = styles[attr];
      }
      this.elementStyles = styles;
    },
  },
};
</script>

<style scoped lang="scss">
$highlight-color: rgba(255, 0, 0, 0.5);

.selectable {
  border: 2px solid transparent;
  // transition: 0.1s ease-in;
  cursor: pointer;
  box-sizing: border-box;

  &--hover {
    border-color: $highlight-color;
  }

  &--selected {
    border-color: red;
  }
}

.tooltip {
  position: relative;
  z-index: 100;

  .tooltip-text {
    position: absolute;
    left: 0;
    opacity: 0;
    background: $highlight-color;
    color: white;
    padding: 10px;
    z-index: 10;

    &--hover {
      opacity: 1;
    }

    &--selected {
      opacity: 1;
      font-weight: bold;
      background: red;
    }

    &.--small {
      padding: 5px;
      font-size: 10px;
    }
  }
}
</style>
