import vue from 'vue'
import Main from './pages/Main.vue'
import './style/main.css'
const app = new vue({
    el: '#app',
    render: createElement => createElement(Main)
})
