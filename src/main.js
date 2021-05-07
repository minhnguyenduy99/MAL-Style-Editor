import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import createVuexStore from "./store";
import { ComponentRegistration } from "@/plugins";
import Buefy from "buefy";

Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(Buefy);
Vue.use(ComponentRegistration);

new Vue({
  router,
  store: createVuexStore(),
  render: (h) => h(App),
}).$mount("#app");
