import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import Simulate from "../views/Simulate.vue";

const routes = [{
  path: "/",
  name: "Home",
  component: Home
}, {
  path: "/about",
  name: "About",
  component: About
}, {
  path: "/profile",
  name: "Profile",
  component: Profile
}, {
  path: "/simulate",
  name: "Simulate",
  component: Simulate
}];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
