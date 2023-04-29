import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css'

import Element from 'element-ui'

import App from './App.vue'
import store from './store'
import router from './router'

import './permission'

Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
