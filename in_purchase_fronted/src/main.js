import './assets/main.css'
import Antd,{message} from 'ant-design-vue'
import { createApp } from 'vue'
import store from './stores/index'
import 'ant-design-vue/dist/reset.css'
import App from './App.vue'
import router from './router'
import './style/commen.less'
const app = createApp(App)

app.use(store)
app.use(router)
app.use(Antd)
app.mount('#app')
app.provide('message',message)
