import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";
import Overview from "../views/Overview.vue";
import Login from "../components/Login.vue";
import Products from "../views/Orders.vue";
import Orders from "../views/Products.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [{ path: "/Login", name: "Login ", component: Login }],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/Admin",
    name: "Admin ",
    component: Admin,
    children: [
      { path: "Overview",
     name: "Overview ", 
     component: Overview
     },
     { path: "Products",
     name: "Products ", 
     component: Products
     },
     { path: "Orders",
     name: "Orders ", 
     component: Orders
     }
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
