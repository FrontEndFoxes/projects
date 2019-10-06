import Vue from 'vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import 'vuetify/dist/vuetify.min.css';
import VueRouter from 'vue-router';
import App from './App';
import Home from './views/Home';
import Pets from './views/Pets';
import Favorites from './views/Favorites';
import Form from './views/Form';
import store from './store/store';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Home },
  { path: '/pets', component: Pets },
  { path: '/favorites', component: Favorites },
  { path: '/form', component: Form },
];

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
});
