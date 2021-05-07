<script>
import { isVue } from "./helpers/vue-helper";

export default {
  name: "SlotComponent",
  props: {
    component: {
      type: Object,
      required: true,
    },
    name: {
      type: String,
      default: "default",
    },
    scoped: {
      type: Boolean,
    },
    props: {
      type: Object,
    },
    tag: {
      type: String,
      default: "div",
    },
    event: {
      type: String,
      default: "hook:updated",
    },
  },
  render(createElement) {
    if (isVue(this.component)) {
      return createElement(
        this.tag,
        {},
        (this.scoped
          ? [this.component.$scopedSlots?.[this.name]?.(this.props)]
          : [this.component.$slots?.[this.name]]) ?? []
      );
    }
    return createElement("div");
  },
};
</script>
