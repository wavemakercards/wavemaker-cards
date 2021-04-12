import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted(){
    console.log("Electron?",process.env.IS_ELECTRON)
  }
}).$mount('#app')
