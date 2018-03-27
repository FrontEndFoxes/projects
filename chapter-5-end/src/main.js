import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import App from './App';
import Home from './views/Home';
import Pets from './views/Pets';
import Cart from './views/Cart';
import Form from './views/Form';
import store from './store/store';

Vue.use(Vuetify);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
  { path: '/cart', component: Cart },
  { path: '/form', component: Form },
];

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
