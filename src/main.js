import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 定义懒加载插件
import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
import {lazyPlugin} from "@/directives";
const app = createApp(App)

app.use(createPinia())
app.use(router)
//注册懒加载插件
app.use(lazyPlugin)
app.mount('#app')