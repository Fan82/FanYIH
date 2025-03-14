// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入 router 配置
import "@/assets/styles/styles.sass"; // 引入全局樣式

const app = createApp(App);
app.use(router);
app.mount("#app");
