import vue from 'vue'
import Main from './pages/Main.vue'
const app = new vue({
    el: '#app',
    render: createElement => createElement(Main)
})
