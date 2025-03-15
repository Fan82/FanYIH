import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FanYiHsuan_vue/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // `@` 代表 `src` 目錄
      vue: "vue/dist/vue.esm-bundler.js",
    },
  },
  server: {
    host: "0.0.0.0", // 允許 LAN 訪問
    port: 5173, // 指定開發伺服器端口（可修改）
  },
  // base: process.env.NODE_ENV === "production" ? "/FanYiHsuan_vue/" : "/", // 根據環境設置 base 路徑
});
