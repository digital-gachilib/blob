import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Book from "../views/Book";
import Upload from "../views/Upload";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "IndexLogin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/books/:book_id",
    name: "book_page",
    component: Book,
    props: true,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
