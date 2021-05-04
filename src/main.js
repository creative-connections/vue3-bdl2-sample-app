import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Vue from 'vue'


//createApp(App).use(router).mount('#app')

const app = createApp(App)
app.use(router).mount('#app')

/*
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['bdl-fmi','bdl-chartjs-time','bdl-range']
*/
