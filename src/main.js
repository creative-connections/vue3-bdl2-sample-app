import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


//createApp(App).use(router).mount('#app')

const app = createApp(App)
//runtime config to ignore bdl elements, non-runtime config somewhere to ...
app.config.isCustomElement = (tag) => tag.startsWith('bdl-');
app.use(router).mount('#app')
