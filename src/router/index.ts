import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '登录',
            keepAlive: true,
            requireAuth: false,
        },
        component: () => import('@/pages/PageLogin.vue'),
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/pages/PageIndex.vue'),
    },
    {
        path: '/home',
        name: 'home',
        meta: {
            title: '欢迎页',
            keepAlive: true,
            requireAuth: true,
        },
        component: () => import('@/components/HelloWorld.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
