import Router from 'vue-router'
// @ts-ignore
import Login from '@pages/Login.vue'
// @ts-ignore
import Register from '@pages/Register.vue'
// @ts-ignore
import Dashbord from '@pages/Dashboard.vue'
// @ts-ignore
import Player from '@pages/Player.vue'
// @ts-ignore
import Admin from '@pages/Admin.vue'
// @ts-ignore
// @ts-ignore
import CreateSheet from '@components/admin/CreateSheet.vue'
// @ts-ignore

import Overview from '@components/admin/Overview.vue'

// @ts-ignore
import Manage from '@components/admin/Manage.vue'

// @ts-ignore
import AdminClubPanel from '@components/admin/AdminClubPanel.vue'

// @ts-ignore
import AdminPlayerPanel from '@components/admin/AdminPlayerPanel.vue'
// @ts-ignore

import viewssheet from '@components/admin/viewssheet.vue'
export default new Router({
    mode: 'history',
    routes: [
        { path: '/auth/login', component: Login, name: 'Login' },
        { path: '/auth/register', component: Register, name: 'Register' },
        { path: '/dashboard', component: Dashbord, name: 'dashboard' },
        { path: '/player', component: Player, name: 'player' },
        {
            path: '/admin',
            component: Admin,
            children: [
                {
                    path: '',
                    name: 'maincomooent',
                    component: Overview
                },
                {
                    path: 'createsheet',
                    name: 'CreateSheet',
                    component: CreateSheet
                },
                {
                    path: 'manage',
                    name: 'manage',
                    component: Manage
                },
                {
                    path: 'clubs',
                    name: 'club',
                    component: AdminClubPanel
                },
                {
                    path: 'manageplayers',
                    name: 'manageplayers',
                    component: AdminPlayerPanel
                },
                {
                    path: '/admin/views',
                    name: 'viewssheets',
                    component: viewssheet
                }
            ]
        }
        // { path: '/club', components: Club, name: 'club' }
        // {path:"/admin/createcompetation",components:}
    ]
})
