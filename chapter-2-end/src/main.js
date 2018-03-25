import Vue from "vue";
import App from "./App";
import Home from "./views/Home";
import Pets from "./views/Pets";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/pets", component: Pets }
];

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>",
  router
});
