import { createApp } from 'vue'
import App from './App'
import Router from './router'
import '@/assets/style/index.scss'
 
const lodash = require('lodash')
const Echarts = require('echarts')
import macarons from './assets/macarons'
Echarts.registerTheme('macarons', macarons)

const app = createApp(App)
 
app.config.globalProperties.$lodash = lodash
app.config.globalProperties.$echarts = Echarts


app.use(Router).mount('#app')
