import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import axios from 'axios';
import 'normalize.css';

Vue.config.productionTip = false;

// Setting up default vue http module for api calls
Vue.prototype.$http = axios;
// load token from localStorage
const token = localStorage.getItem('token');
// If token then we append default axios authorization headers
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

// Vue.use(VueRecaptcha, {
//   sitekey: '6LewOvwUAAAAAI-HnAE4R1EaHCcjE0d1lrLMhJzH',
// });

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
