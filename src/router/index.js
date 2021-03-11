import Vue from 'vue'
import VueRouter from 'vue-router'
import mainPage from '@/pages/mainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: mainPage,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/static-commands',
    name: 'StaticCommands',
    component: () => import('../pages/staticCommandsPage/staticCommands.vue')
  },
  {
    path: '/overlay',
    name: 'Overlay',
    component: () => import('../pages/overlayPage/overlay.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
