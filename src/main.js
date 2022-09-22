// import Vue from 'vue'
// import App from './App.vue'
// import store from "./store";
// // import Vuex from "vuex";

// Vue.config.productionTip = false
// // Vue.use(Vuex)
// // new Vue({
// //   store,
// //   render: h => h(App),
// // }).$mount('#app')
// console.log(store)
// const vm = new Vue({
//   store,
//   render: (h) => h(App),
// }).$mount("#app");

// export { vm };




/* eslint-disable no-prototype-builtins */
/* eslint-disable max-len */
import Vue from "vue";
import App from "./App";

import store from "./store";
// import Vuex from "vuex";


// export const EventBus = new Vue();
Vue.config.productionTip = false

// Vue.use(Vuex)
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");


// new Vue({
//   el: '#app',
//   store,
//   template: '<App/>',
//   components: { App }
// })