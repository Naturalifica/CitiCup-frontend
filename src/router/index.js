import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import Index from '~/pages/index.vue'
import About from '~/pages/about.vue'
import _404 from '~/pages/404.vue'
import Login from '~/pages/login.vue'
import Service from '~/pages/service.vue'

const routes = [{
        path: "/",
        component: Index,
    }, {
        path: "/about",
        component: About,
    }, {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: _404
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/service",
        component: Service
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router