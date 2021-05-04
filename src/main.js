import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Vue from 'vue'


//createApp(App).use(router).mount('#app')

const app = createApp(App)
//runtime config to ignore bdl elements, non-runtime config somewhere to ...
app.config.isCustomElement = (tag) => tag.startsWith('bdl-');
app.config.ignoredElements = ['bdl-fmi','bdl-chartjs-time','bdl-range']
app.use(router).mount('#app')

/*
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['bdl-fmi','bdl-chartjs-time','bdl-range']
*/
