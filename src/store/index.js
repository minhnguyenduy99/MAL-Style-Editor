import Vue from "vue";
import Vuex from "vuex";
import ElementStyleModule from "./element-style.module";

Vue.use(Vuex);

const MODULES = {
  elementStyle: "ES",
};

export default () =>
  new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      [MODULES.elementStyle]: ElementStyleModule,
    },
  });
