import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "../views/AboutApp.vue";
import LiveMap from "../views/LiveMap.vue";
import BookList from "../views/BookList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LiveMap,
  },
  {
    path: "/kniznica/oravska-kniznica-antona-habovstiaka",
    name: "details",
    component: AboutApp,
  },
  {
    path: "/kniha/:slug",
    name: "zoznam-knih",
    props: true,
    component: BookList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
