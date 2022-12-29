import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'
import Trading from "~/components/Trading/Trading.vue";
import Strategy from "~/components/Strategy/Strategy.vue";
import Me from "~/components/Me/Me.vue";
import Risk from "~/components/Risk/Risk.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: Home
        },
        {
            path: '/risk',
            name: 'risk',
            component: Risk
        },
        {
            path: '/me',
            name: 'me',
            component: Me
        },
        {
            path: '/strategy',
            name: 'strategy',
            component: Strategy
        },
        {
            path: '/trading',
            name: 'trading',
            component: Trading
        },
    ]
})




export default router

