import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VModal from 'vue-js-modal';
import './scss/main.scss'

Vue.config.productionTip = false
Vue.use(VModal)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
