import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  data(){
    return{
      isElectron : process.env.IS_ELECTRON,
      fileinfo :{
        location : null,
        type : null
      }
    }
  },
  methods:{
    importFile(data){
      console.log("Import", JSON.parse(data))
    }
  }
}).$mount('#app')
