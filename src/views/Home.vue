<template>
  <div class="home">
    <mal-preview-container />
    <sidebar :title="selectedGroupName">
      <app-tabs v-model="activeTabIndex">
        <app-tabs-item
          v-for="tab in selectedGroup"
          :key="tab.id"
          :title="tab.tab"
        >
          <style-group-container
            :group-key="selectedGroupName"
            :groups="tab.styles"
            ref="styler"
          />
        </app-tabs-item>
      </app-tabs>
      <template #footer>
        <div class="app-button-group">
          <app-button class="app-button--save" @click="$on_saveClicked"
            >Save</app-button
          >
          <app-button class="app-button--save outlined">Reset</app-button>
        </div>
      </template>
    </sidebar>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    "mal-preview-container": () =>
      import("../MALComponents/MALPreviewContainer"),
  },
  data: () => ({
    groups: {
      header: [
        {
          tab: "utilize",
          styles: ["space"],
        },
      ],
      Name: [{ tab: "utilize", styles: ["space"] }],
    },
    selectedGroupName: null,
    activeTabIndex: 0,
  }),
  created: function () {
    Object.keys(this.groups).forEach((groupName) => {
      const tabs = this.groups[groupName];
      tabs.forEach((tab) => {
        this.addElement({
          name: groupName,
          groups: tab.styles,
        });
      });
    });
  },
  methods: {
    ...mapMutations("ES", ["addElement"]),
    $on_saveClicked() {
      this.$refs.styler[this.activeTabIndex].$build();
    },
  },
  mounted: function () {
    this.$mal.$selectable.on("selected", (elementName) => {
      this.$mal.$sidebar.$open();
      this.$nextTick().then(() => {
        this.selectedGroupName = elementName;
      });
    });
    this.$mal.$selectable.on("unselected", () => {
      this.selectedGroupName = null;
    });
  },
  computed: {
    selectedGroup() {
      return this.groups[this.selectedGroupName] ?? [];
    },
  },
};
</script>

<style lang="scss" scoped>
.app-button {
  &--save {
    opacity: 0.8;
    width: 100%;

    &:hover {
      opacity: 1;
    }
  }
}

.app-button-group {
  > * {
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }
  }
}
</style>
