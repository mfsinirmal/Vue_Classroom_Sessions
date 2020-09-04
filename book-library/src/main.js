import Vue from 'vue'
import App from './App.vue'
import Highlight from "./directives/Highlight"
import router from "./router"

Vue.config.productionTip = false

Vue.directive("highlight", Highlight.highlight)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
