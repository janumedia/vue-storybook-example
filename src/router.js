import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/setup',
        name: 'setup',
        component: () => import(/* webpackChunkName: "setup" */ '@/views/Setup.vue')
    },
    {
      path: '/media',
        name: 'media',
        component: () => import(/* webpackChunkName: "setup" */ '@/views/Media.vue')
    },
    {
        path: '*',
        name: '404',
        meta: { layout: 'no-nav' },
        component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
    }
  ]
})