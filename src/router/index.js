// src/router/index.js
// 用@ >> 絕對路徑
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Project from "@/views/ProjectList.vue";
import ProjectDetail from "@/views/ProjectDetail.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/projects", name: "Projects", component: Project },
  {
    path: "/projects/:id",
    name: "ProjectDetail",
    component: ProjectDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory("/FanYiHsuan_vue/"), // 提供專案名稱作為基本路徑
  routes, // 這裡只留一個 routes 陣列
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0, behavior: "smooth" });
      }, 10);
    });
  },
});

export default router;
