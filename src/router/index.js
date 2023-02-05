import { createRouter, createWebHistory } from "vue-router";
import LiveMap from "../views/LiveMap.vue";
import LibraryDetail from "../views/LibraryDetail.vue";
import BookDetail from "../views/BookDetail.vue";
import CreatorDetail from "../views/CreatorDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LiveMap,
  },
  {
    path: "/kniznica/oravska-kniznica-antona-habovstiaka",
    name: "detail-kniznice",
    component: LibraryDetail,
  },
  {
    path: "/kniha/:slug",
    name: "detail-knihy",
    props: true,
    component: BookDetail,
  },
  {
    path: "/creator/",
    name: "detail-autora",
    component: CreatorDetail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
