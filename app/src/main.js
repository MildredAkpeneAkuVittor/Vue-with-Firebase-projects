import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.component("alert",require('./components/alert.vue').default);
Vue.component("todo",require('./components/ToDo.vue').default);
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
