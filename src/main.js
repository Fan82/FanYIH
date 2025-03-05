// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入 router 配置
import "./assets/styles.sass"; // 引入全局樣式

createApp(App)
  .use(router) // 使用 router
  .mount("#app");
