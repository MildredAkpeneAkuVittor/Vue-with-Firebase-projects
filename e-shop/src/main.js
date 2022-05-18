import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap' ;
import './assets/app.scss'
import 'popper.js';
import jQuery from "jquery";

window.$ =window.jQuery=jQuery

Vue.config.productionTip = false;

Vue.component('Navbar', require('./components/Navbar.vue').default)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");