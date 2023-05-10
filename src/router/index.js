import {createRouter, createWebHistory} from 'vue-router'
import Main from "@/pages/Main";
import Program from "@/pages/Program";
import Catalog from "@/pages/Catalog";
import Scheme from "@/pages/Scheme";

const routes = [

    {
        path: '/',
        component: Main
    },

    {
        path: '/program',
        component: Program
    },

    {
        path: '/catalog',
        component: Catalog
    },

    {
        path: '/scheme',
        component: Scheme
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
