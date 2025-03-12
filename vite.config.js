import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path"; // 確保引入 path 模組

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 設定 `@` 代表 `src` 目錄
    },
  },
  server: {
    host: true,
  },
  build: {
    assetsInclude: [
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
      "**/*.svg",
    ],
  },
});
