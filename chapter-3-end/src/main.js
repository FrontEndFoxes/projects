import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import vuetify from "@/plugins/vuetify";
import Home from './views/Home';
import Pets from './views/Pets';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
];

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
