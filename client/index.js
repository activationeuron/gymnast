import vue from 'vue'
import './style/main.css'
import router from './routes.js'
import Router from 'vue-router'
import store from './store'
import Main from './pages/Main.vue'
vue.use(Router)

const app = new vue({
    el: '#app',
    router,
    store,
    render: createElement => createElement(Main)
})
