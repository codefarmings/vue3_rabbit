
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入初始化样式文件
import '@/styles/common.scss'
import {lazyPlugin} from "@/directives/index"
import {componentPlugin} from '@/components'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)
app.mount('#app')

