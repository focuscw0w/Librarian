import { createRouter, createWebHistory } from "vue-router";
import LiveMap from "../views/LiveMap.vue";
import LibraryDetail from "../views/LibraryDetail.vue";
import BookDetail from "../views/BookDetail.vue";
import CreatorDetail from "../views/CreatorDetail.vue";
import BookList from "@/views/BookList.vue";
import CreatorList from "@/views/CreatorList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: LiveMap,
  },
  {
    path: "/knihy",
    name: "zoznam-knih",
    component: BookList,
  },
  {
    path: "/autori",
    name: "zoznam-autorov",
    component: CreatorList,
  },
  {
    path: "/kniznica/:slug",
    // props: true,
    name: "detail-kniznice",
    component: LibraryDetail,
  },
  {
    path: "/kniha/:slug",
    name: "detail-knihy",
    // props: true,
    component: BookDetail,
  },
  {
    path: "/autor/:slug",
    name: "detail-autora",
    component: CreatorDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
