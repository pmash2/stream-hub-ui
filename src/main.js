import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/tailwind.css'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import chatHubQueue from './hubs/chatHubQueue'

// Setup axios as the Vue default $http library
axios.defaults.baseURL = 'https://localhost:44349' // same as the Url the server listens to
Vue.prototype.$http = axios

Vue.use(VueMaterial)
Vue.use(chatHubQueue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
