import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Game from '@/components/Game.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contactus',
      name: 'contactus',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/ContactUs.vue')
    },
    {
      path: '/photo',
      name: 'photo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Photo.vue')
    },
    {
      path: '/game/:id',
      name: 'Id',
      component: Game,
      props: true
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior (from, to, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})
