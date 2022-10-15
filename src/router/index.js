import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomePage.vue'
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
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
