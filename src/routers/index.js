import Vue from 'vue'
import VueRouter from 'vue-router'
import authRoutes from './auth'
import homeRoutes from './home'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...authRoutes,
        ...homeRoutes,
        {
            path: '*',
            redirect: '/login'
        },
    ]
})

export default router
