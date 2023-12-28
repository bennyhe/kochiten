import { createApp } from 'vue'
import VueLazyload from 'vue3-lazyload'
import App from './App.vue'

createApp(App).use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1
}).mount('#app')
