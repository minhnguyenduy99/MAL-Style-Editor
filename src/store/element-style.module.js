export default {
  namespaced: true,
  state: {
    elements: {},
    lastUpdated: {
      element: "",
      time: Date.now(),
    },
  },
  mutations: {
    addElement(state, { name, groups }) {
      if (state.elements.name) {
        return;
      }
      state.elements[name] = {};
      const element = state.elements[name];
      groups.forEach((group) => {
        element[group] = {};
      });
    },
    updateElement(state, { name, groups }) {
      const currentGroups = state.elements[name];
      if (!currentGroups) {
        return;
      }
      state.elements[name] = groups;
    },
    setLastUpdated(state, element) {
      state.lastUpdated = {
        element,
        time: Date.now(),
      };
    },
  },
  getters: {
    element: (state) => (name) => {
      return state.elements[name];
    },
    lastUpdated: (state) => {
      return state.lastUpdated;
    },
  },
  actions: {
    updateElement({ commit }, { name, groups }) {
      commit("updateElement", { name, groups });
      commit("setLastUpdated", name);
    },
  },
};
