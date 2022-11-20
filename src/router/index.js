import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(),
  routes
})

export default router
