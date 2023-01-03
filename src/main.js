import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'windi.css'
import 'animate.css'
import store from './store/index.js'

const app = createApp(App).use(store)

app.use(router)
app.use(ElementPlus)
app.use(store)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.mount('#app')

