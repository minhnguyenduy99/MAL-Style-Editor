import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
import "@/components/styles/main.css";

function installComponents(Vue) {
  const components = require.context("@/components", true, /(.vue)$/);

  components.keys().forEach((fileName) => {
    const componentConfig = components(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Gets the file name regardless of folder depth
        fileName
          .split("/")
          .pop()
          .replace(/\.\w+$/, "")
      )
    );

    Vue.component(componentName, componentConfig.default || componentConfig);
  });
}

function installPlugins(Vue) {
  const plugins = require.context("@/components", true, /(.plugin)$/);

  plugins.keys().forEach((fileName) => {
    const plugin = plugins(fileName);
    Vue.use(plugin.default);
  });
}

export default {
  install(Vue) {
    installComponents(Vue);
    installPlugins(Vue);
  },
};
