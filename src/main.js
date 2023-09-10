
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入初始化样式文件
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
app.directive('img-lazy',{
    // el:指令绑定的那个元素img
    // binging：binding.value 指令等于号后面绑定的表达式的值，图片url
    mounted(el,binding){
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
                console.log(isIntersecting);
               if (isIntersecting) {
                   el.src = binding.value
               }
            },
          )
    }
})
