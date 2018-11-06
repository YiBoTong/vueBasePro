// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Element from 'element-ui';
import App from './App';
import router from './router';
import store from './vuex';
import Directives from './lib/directives';
import Filters from './lib/filters';
import { fetch } from './lib/ajax';

import './assets/sass/index.scss';

Vue.config.productionTip = false;
Vue.http = Vue.prototype.$http = fetch;

Vue.use(Element);
Vue.use(Directives);
Vue.use(Filters);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
});
