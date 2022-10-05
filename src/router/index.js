import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import LiveMap from '../views/LiveMap.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/livemap',
    name: 'livemap',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/LiveMap.vue')
    component: LiveMap
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
