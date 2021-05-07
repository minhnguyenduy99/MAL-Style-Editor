<template>
  <div class="app-tabs">
    <nav>
      <ul>
        <li
          v-for="(tab, index) in tabs"
          :key="tab.id"
          :class="{
            'app-tabs-item': true,
            'is-active': index === activeTabIndex,
            headerClass: true,
          }"
          @click="selectTab(index)"
        >
          {{ tab.title }}
        </li>
      </ul>
    </nav>
    <div class="app-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppTabs",
  props: {
    headerClass: String,
    value: Number,
  },
  model: {
    prop: "value",
    event: "activeChanged",
  },
  data: () => ({
    tabs: [],
  }),
  mounted: function () {
    this.tabs = this.$children;
    this.selectTab(0);
  },
  watch: {
    tabs() {
      this.selectTab(0);
    },
  },
  computed: {
    activeTab() {
      return this.tabs[this.activeTabIndex];
    },
    activeTabIndex: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("activeChanged", val);
      },
    },
  },
  methods: {
    selectTab(index) {
      this.activeTabIndex = index;
      this.tabs.forEach((tab, tabIndex) => {
        tab.isActive = tabIndex === index;
      });
    },
  },
};
</script>

<style scoped lang="scss">
$tab-content-padding: 1rem 0;
$header-font-size: var(--is-size-6);

$tab-item-padding: 0.5rem 0.5rem;
$tab-item-min-width: 50px;
$tab-item-border-color: rgb(230, 230, 230);
$tab-item-border-hover-color: rgb(200, 200, 200);
$active-tab-item-border-color: var(--primary-dark-color);

.app-tabs {
  ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
  }

  &-item {
    padding: $tab-item-padding;
    border-bottom: 2px solid $tab-item-border-color;
    cursor: pointer;
    font-size: $header-font-size;
    min-width: $tab-item-min-width;

    &:hover {
      border-color: $tab-item-border-hover-color;
    }

    &.is-active {
      border-color: $active-tab-item-border-color;
    }
  }

  &-content {
    padding: $tab-content-padding;
  }
}
</style>
