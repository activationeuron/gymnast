import Router from 'vue-router'
import Login from '@pages/Login.vue'
import Register from '@pages/Register.vue'
import Dashbord from '@pages/Dashboard.vue'
import Player from '@pages/Player.vue'
export default new Router({
    mode: 'history',
    routes: [
        { path: '/auth/login', component: Login, name: 'Login' },
        { path: '/auth/register', component: Register, name: 'Register' },
        { path: '/dashboard', component: Dashbord, name: 'dashboard' },
        { path: '/player', component: Player, name: 'player' }
    ]
})
