<template>
  <div class="space-styler">
    <div class="title-wrapper">
      <span>{{ title }}</span>
    </div>
    <div class="actions-wrapper">
      <app-textbox class="space-textbox" v-model.lazy="valueInNumber" />
      <select class="space-unit-select" v-model="selectedUnit">
        <option v-for="unit in SPACE_UNITS" :key="unit.id" :value="unit">
          {{ unit }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpaceStyler",
  props: {
    title: String,
    value: {
      type: String,
      default: () => "",
    },
    type: {
      type: String,
      validator: (val) =>
        ["margin", "padding", "height", "width"].indexOf(val) > -1,
    },
  },
  inject: ["builder"],
  data: () => ({
    SPACE_UNITS: ["px", "%"],
    selectedUnit: "px",
    valueInNumber: "0",
  }),
  mounted: function () {
    this.$_updateValue();
  },
  watch: {
    selectedUnit() {
      this.$_applyStyle();
    },
    valueInNumber(val) {
      if (!val) {
        return;
      }
      this.$_applyStyle();
    },
  },
  methods: {
    $_applyStyle() {
      const value = `${this.valueInNumber}${this.selectedUnit}`;
      this.builder[this.type]?.("all", value);
    },
    $_updateValue() {
      const unitIndex = this.value.search(/(px)|(%)/g);
      if (unitIndex === -1) {
        return;
      }
      this.selectedUnit = this.value.substr(unitIndex);
      this.valueInNumber = this.value.substr(0, unitIndex);
    },
  },
};
</script>

<style scoped lang="scss">
$title-color: var(--text-color);

.space-styler {
  > * {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}

.title-wrapper {
  text-align: left;
  font-size: 0.8rem;

  span {
    color: $title-color;
  }
}

.actions-wrapper {
  display: flex;
  > * {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
}

.space-textbox {
  width: 30px;
}

.space-unit-select {
  padding: 7px;
  font-size: 1rem;
}
</style>
