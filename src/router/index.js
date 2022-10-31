import { createRouter, createWebHashHistory } from 'vue-router'
import AboutApp from '../views/AboutApp.vue'
import LiveMap from '../views/LiveMap.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LiveMap
  },
  {
    path: '/details',
    name: 'details',
    component: AboutApp
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
