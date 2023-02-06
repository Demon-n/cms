import Vue from "vue";
import VueRouter from "vue-router";
//引入路由组件
import Login from "@/pages/Login/index.vue";
import Register from "@/pages/Register/index.vue";
import UpdatePass from "@/pages/UpdatePass/index.vue";
import SelectSort from "@/pages/SelectSort/index.vue";
import AddSort from "@/pages/AddSort/index.vue";
import UpdateSort from "@/pages/UpdateSort/index.vue";
import DeleteSort from "@/pages/DeleteSort/index.vue";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      name: "register",
      path: "/register",
      component: Register,
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "UpdatePass",
      path: "/UpdatePass",
      component: UpdatePass,
    },
    {
      name: "SelectSort",
      path: "/SelectSort",
      component: SelectSort,
    },
    {
      name: "AddSort",
      path: "/AddSort",
      component: AddSort,
    },
    {
      name: "UpdateSort",
      path: "/UpdateSort",
      component: UpdateSort,
    },
    {
      name: "DeleteSort",
      path: "/DeleteSort",
      component: DeleteSort,
    },
  ],
});
