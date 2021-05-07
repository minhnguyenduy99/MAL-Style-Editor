<template>
  <div id="list-container" class="list-container">
    <selectable element-name="Status menu">
      <mal-status-menu />
    </selectable>
    <selectable element-name="List block">
      <mal-list-block />
    </selectable>
  </div>
</template>

<script>
export default {
  name: "MALContainer",
  components: {
    "mal-status-menu": () => import("./MALStatusMenu"),
    "mal-list-block": () => import("./MALListBlock"),
  },
  data: () => ({
    className: "list-container",
    appliedStyles: {
      margin: "0 20px",
    },
  }),
  mounted: function () {
    console.log(this.getCSSClass);
  },
  computed: {
    getCSSClass() {
      let styleLines = "";
      Object.keys(this.appliedStyles).forEach((key) => {
        styleLines = styleLines.concat(`${key}: ${this.appliedStyles[key]};\n`);
      });
      return `
        ${this.className} {
          ${styleLines}
        }
      `;
    },
  },
  methods: {
    removeMargin() {
      this.$el.style.margin = "0";
      console.log(this.$el.style);
    },
  },
};
</script>
