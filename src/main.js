import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Vue from 'vue'


//createApp(App).use(router).mount('#app')

const app = createApp(App);
//if runtime compiler is used - ignore custom elements, same compiler option in vue.config.js
app.config.isCustomElement = (tag) => tag.startsWith("edit-");
app.use(router).mount('#app');

/*
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.config.ignoredElements = ['bdl-fmi','bdl-chartjs-time','bdl-range']
*/
