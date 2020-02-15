import vue from 'vue'
import Main from './pages/Main.vue'
import './style/main.css'
import router from './routes.js'
import Router from 'vue-router'

vue.use(Router)

const app = new vue({
    el: '#app',
    router,
    render: createElement => createElement(Main)
})
