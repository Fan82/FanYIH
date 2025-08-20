// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // 引入 router 配置
import "@/assets/styles/styles.sass"; // 引入全局樣式

const app = createApp(App);

// 初始化 GA4
if (typeof window !== "undefined") {
  // 確保在瀏覽器環境中運行
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-71P6425R84", { send_page_view: false }); // '您的GA4衡量ID' 替換為 G-XXXXXXXXXX

  // 針對 SPA (單頁應用) 處理頁面瀏覽追蹤，如果沒有 Vue Router 則不需要
  router.afterEach((to, from) => {
    gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: to.path,
    });
  });
}

app.use(router);
app.mount("#app");
