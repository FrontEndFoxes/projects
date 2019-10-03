import Vue from 'vue';
import vuetify from '@/plugins/vuetify'; // path to vuetify export
import 'vuetify/dist/vuetify.min.css';
import App from './App';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: '#app',
  components: { App },
  template: '<App/>',
});
