import './style.scss';

import App from './App.vue'
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource)

new Vue({
  components: { App },
  template: "<App/>",
}).$mount("#app");