import { createApp } from 'vue'

import App from './App.vue'
import router from "./router/index"
import plugin from './plugin/plugin'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './mock/index'

createApp(App).use(router).use(createPinia()).use(ElementPlus).use(plugin).use(createPinia).mount('#app')
