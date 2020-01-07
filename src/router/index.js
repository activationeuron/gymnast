/* eslint-disable */
import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Signup from "@/components/Signup";
import home from "@/components/home";
import Mount from "@/components/LevelOne/Mount";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/home",
      name: "home",
      component: home
    },
    {
      path: "/component1",
      name: "component",
      component: Mount
    }
  ]
});
