import Vue from 'vue';
import App from './App';
import router from './router';
import Vuetify from 'vuetify';
import {sync} from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import 'font-awesome/css/font-awesome.css'
import Panel from '@/components/ReusablePanel/Panel'
// index.js or main.js


Vue.config.productionTip = false;

Vue.use(Vuetify)

Vue.component('panel',Panel),


sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

