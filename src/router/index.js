import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/currency.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Currency",
    component: Home,
    meta: { title: "Курс валют" }
  },
  {
    path: "/convert",
    name: "Convert",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/convert.vue"),
    meta: { title: "Конвертер" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;

  next();
});

export default router;
