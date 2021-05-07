let currentSelector = null;
let selected = null;

export default {
  eventHandlers: {
    selected: [],
    unselected: [],
  },

  on(event, handler) {
    this.eventHandlers[event]?.push(handler);
  },
  enter(element) {
    this.leave(currentSelector);
    currentSelector = element;
  },
  leave(element) {
    element?.$on_mouseleave();
  },
  unselect() {
    selected?.$on_unselect();
    selected = null;
  },
  select(element) {
    if (element === selected) {
      this.unselect();
      callHandlers(this.eventHandlers.unselected);
      return;
    }
    this.unselect();
    selected = element;
    callHandlers(this.eventHandlers.selected, selected.elementName);
  },
};

function callHandlers(handlers, args) {
  handlers?.forEach((handler) => handler?.(args));
}
