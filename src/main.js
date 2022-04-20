import Vue from 'vue'
import vant from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import 'vant/lib/index.css';
Vue.config.productionTip = false
Vue.use(vant)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
