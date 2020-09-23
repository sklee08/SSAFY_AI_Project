import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router =  new VueRouter({
    mode: 'history',
    routes: [

        {
            path: "/",
            name: 'Login',
            component: () => import('@/components/user/login')
        },
        {
            path: "/main",
            name: 'Main',
            component: () => import('@/components/contents/main')
        },
        {
            path: "/interview",
            name: 'interview',
            component: () => import('@/components/webcam/interview')
        },

    ],
})