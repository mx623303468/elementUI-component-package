import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/table",
    name: "Table Plus",
    component: () => import("../views/table-plus/index.vue"),
  },
  {
    path: "/form",
    name: "Form Plus",
    component: () => import("../views/form-plus/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
