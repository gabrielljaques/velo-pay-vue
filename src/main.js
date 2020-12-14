import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import vuetify from './plugins/vuetify'
import './plugins/axios'

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

Vue.filter('dinheiro', valor => {
  return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
