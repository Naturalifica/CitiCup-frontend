import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home/Home.vue'
import Trading from "../components/Trading/Trading.vue";
import Strategy from "../components/Strategy/Strategy.vue";
import Account from "../components/Account/Account.vue";
import Risk from "../components/Risk/Risk.vue";
import Market from "../components/Market/Market.vue";
import Register from "../components/Account/subComponents/Register.vue";
import Login from "../components/Account/subComponents/Login.vue";
import About from "../components/About/About.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/risk',
            name: 'risk',
            component: Risk
        },
        {
            path: '/account',
            name: 'account',
            component: Account
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
        {
            path: '/market',
            name: 'market',
            component: Market
        },
        {
            path: '/account/register',
            name: 'register',
            component: Register
        },
        {
            path: '/account/login',
            name: 'login',
            component: Login
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})




export default router

