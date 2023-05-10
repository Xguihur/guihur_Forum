import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import globalUse from './global'
// md编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import store from './store/index.js'
import router from './router'

const app = createApp(App)
app.use(store) //没办法链式编程写 use.use.use...
app.use(router)
app.use(mavonEditor)
app.use(globalUse)
app.mount('#app')
