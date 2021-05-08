import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Header from './components/Header.vue'
import axios from "axios";
import VueChatScroll from 'vue-chat-scroll';

Vue.config.productionTip = false

Vue.component("Header", Header)

Vue.use(VueChatScroll);

store.dispatch('autoLogin')

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')

// CI test