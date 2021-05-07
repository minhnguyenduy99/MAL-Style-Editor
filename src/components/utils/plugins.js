export const programmaticPlugin = (componentName, component) => {
  return {
    install(Vue) {
      if (!Vue.prototype.$mal) Vue.prototype.$mal = {};
      Vue.prototype.$mal[`$${componentName}`] = component;
    },
  };
};
