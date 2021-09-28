import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router/index'
// import store from './store'
import '../permission'


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
