import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { BootstrapVue } from 'bootstrap-vue'

// styles
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App),
}).$mount('#app')
