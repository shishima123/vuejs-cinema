import './style.scss';

import App from './App.vue'
import Vue from 'vue';
import VueResource from 'vue-resource';

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
moment.tz.setDefault("UTC")

Vue.use(VueMoment, {
  moment,
})
Vue.use(VueResource)

new Vue({
  components: { App },
  template: "<App/>",
}).$mount("#app")