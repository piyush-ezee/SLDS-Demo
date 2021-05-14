import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css";
createApp(App).use(router).mount('#app')
