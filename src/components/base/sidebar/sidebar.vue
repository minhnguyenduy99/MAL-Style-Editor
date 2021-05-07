<template>
  <div
    :class="{
      sidebar: true,
      'is-closed': !open,
    }"
  >
    <div class="sidebar-header">
      <slot name="title" v-bind="{ title }">
        <div class="title-container">
          <span class="sidebar-title">{{ title }}</span>
          <slot name="trigger">
            <app-button
              class="trigger outlined is-small"
              @click="$on_triggerClicked"
            >
              <i :class="['fas', open ? 'fa-times' : 'fa-chevron-right']"></i>
            </app-button>
          </slot>
        </div>
      </slot>
    </div>
    <div class="sidebar-content">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="sidebar-footer">
      <hr />
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import AppButton from "../app-button/app-button";

const Sidebar = {
  name: "Sidebar",
  components: {
    AppButton,
  },
  props: {
    title: String,
  },
  data: () => ({
    open: true,
  }),
  methods: {
    $toggle() {
      this.open = !this.open;
    },
    $open() {
      this.open = true;
    },
    $on_triggerClicked() {
      this.open = !this.open;
    },
  },
};

export default Sidebar;
</script>

<style scoped lang="scss">
$sidebar-padding: 1.5rem 1rem;
$sidebar-top: 100px;
$sidebar-height: auto;
$sidebar-min-width: 300px;

@import "./style.scss";

.sidebar {
  position: fixed;
  top: $sidebar-top;
  left: 0;
  height: $sidebar-height;
  max-height: $sidebar-height;
  width: auto;
  min-width: $sidebar-min-width;
  z-index: 101;
  background: white;
  color: var(--text-color);
}

.title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .sidebar-title {
    font-weight: bold;
  }
}

.sidebar-header {
  padding: 1rem;
  background-color: rgb(240, 240, 240);
}

.sidebar-content {
  padding: 1rem;
}

.sidebar-footer {
  padding: 1rem;

  hr {
    margin: 1rem 0;
  }
}
</style>
