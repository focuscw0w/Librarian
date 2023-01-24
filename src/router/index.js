import { createRouter, createWebHistory } from "vue-router";
import LibraryDetail from "../views/LibraryDetail.vue";
import LiveMap from "../views/LiveMap.vue";
import BookDetail from "../views/BookDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LiveMap,
  },
  {
    path: "/kniznica/oravska-kniznica-antona-habovstiaka",
    name: "details",
    component: LibraryDetail,
  },
  {
    path: "/kniha/:slug",
    name: "detail-knihy",
    props: true,
    component: BookDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
