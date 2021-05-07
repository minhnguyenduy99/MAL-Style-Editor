<template>
  <div :key="groupKey" class="style-group-container">
    <app-collapse
      v-for="(group, index) in styleGroups"
      :key="group.id"
      v-model="opens[index]"
    >
      <template #trigger="{ open }">
        <div class="style-group-header">
          <span class="trigger-title">{{ groups[index] }}</span>
          <app-button class="is-small">
            <i
              :class="[
                'fas',
                'is-small',
                open ? 'fa-chevron-down' : 'fa-chevron-left',
              ]"
            ></i>
          </app-button>
        </div>
        <hr />
      </template>
      <component
        :styles="elementStyles[group.name]"
        :is="group.component"
        ref="style-group"
      ></component>
    </app-collapse>
  </div>
</template>

<script>
import StyleGroupMappings from "./style-group-mappings";
import { mapActions } from "vuex";

export default {
  name: "StyleGroupContainer",
  props: {
    groupKey: String,
    groups: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    styleGroups: [],
    opens: [],
  }),
  created: function () {
    this.styleGroups = this.groups.map((group) => ({
      name: group,
      component: StyleGroupMappings[group],
    }));
    this.opens = this.groups.map(() => false);
  },
  mounted: function () {
    console.log(this);
  },
  watch: {
    groupKey() {
      this.opens = this.opens.map(() => false);
    },
    groups() {
      this.styleGroups = this.groups.map((group) => ({
        name: group,
        component: StyleGroupMappings[group],
      }));
    },
  },
  computed: {
    elementStyles() {
      return this.$store.getters["ES/element"](this.groupKey);
    },
  },
  methods: {
    ...mapActions("ES", ["updateElement"]),

    $build() {
      const styles = this.$refs["style-group"].reduce(
        (previous, current, currentIndex) => ({
          ...previous,
          [this.groups[currentIndex]]: current.$build(),
        }),
        {}
      );
      this.updateElement({ name: this.groupKey, groups: styles });
    },
  },
};
</script>

<style scoped lang="scss">
.style-group {
  &-container {
    > * {
      &:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  }
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.trigger-title {
  font-weight: bold;
  font-size: 1rem;
}
</style>
