import VueRouter from "vue-router";
import HomeScreen from "./views/HomeScreen";

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: HomeScreen,
      props: true
    },
  ]
});