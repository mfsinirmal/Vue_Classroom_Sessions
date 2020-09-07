import Vue from 'vue'
import App from './App.vue'
import Highlight from "./directives/Highlight"
import router from "./router"
import store from "./Store"

Vue.config.productionTip = false

Vue.directive("highlight", Highlight.highlight)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
