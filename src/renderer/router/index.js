import { createWebHistory, createRouter } from "vue-router";
import Wizard from "@/views/Wizard/index.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",
    name: "Wizard",
    component: Wizard,
    meta: {
        layout: 'wizardLayout'
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
        layout: 'aboutLayout'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;