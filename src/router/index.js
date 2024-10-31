import { createRouter, createWebHistory } from 'vue-router'
import LoginPageView from '../views/LoginPageView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPageView,
        },
    ],
})

export default router
