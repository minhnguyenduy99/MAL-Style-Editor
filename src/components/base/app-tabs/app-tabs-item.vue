<script>
export default {
  name: "AppTabsItem",
  props: {
    tag: {
      type: String,
      default: () => "div",
    },
    selected: {
      type: Boolean,
      default: () => false,
    },
    title: String,
  },
  data: () => ({
    isActive: false,
  }),
  mounted: function () {
    this.isActive = this.selected;
  },
  render(createElement) {
    const header = this.$scopedSlots.header;
    return createElement(
      this.tag,
      {
        class: this.tabItemClass,
        directives: [{ name: "show", value: this.isActive }],
        scopedSlots: {
          header: (props) => header(props),
          default: () => this.$slots.default,
        },
      },
      [this.$slots.default]
    );
  },
  computed: {
    tabItemClass() {
      return {
        "app-tab-item": true,
        "is-active": this.isActive,
      };
    },
    headerClass() {
      return {
        "app-tab-item--header": true,
      };
    },
  },
};
</script>
