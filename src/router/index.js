import Vue from "vue";
import vueRouter from "vue-router";
//1.安装插件
Vue.use(vueRouter);
//路由的懒加载
const Home = () => import("views/Home/home");
const Category = () => import("views/category/category");
const Cart = () => import("views/cart/cart");
const Profile = () => import("views/profile/profile");
const Detail = () => import("views/detail/detail");

//2.根据路由规则，渲染组件
const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/detail/:id",
    component: Detail,
  },
];
//3.创建一个路由对象
const router = new vueRouter({
  routes,
  mode: "history",
});
export default router;
