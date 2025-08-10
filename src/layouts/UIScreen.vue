<template>
  <div class="grid">
    <img v-for="(image, index) in images" :key="index" class="project-img" :src="image" alt="Project screen" />
  </div>
</template>

<script>
export default {
  props: ["projectId"], // 透過 props 傳入專案 ID
  computed: {
    images() {
      const images = import.meta.glob("@/public/projects/*/page/*.png", { eager: true });
      // 過濾出符合 projectId 的圖片
      return Object.keys(images)
        .filter((path) => path.includes(`/projects/${this.projectId}/page/`))
        .sort((a, b) => {
          // 按照 `page_X.png` 排序
          const numA = parseInt(a.match(/page_(\d+)\.png$/)[1]);
          const numB = parseInt(b.match(/page_(\d+)\.png$/)[1]);
          return numA - numB;
        })
        .map((path) => images[path].default);
    },
  },
};
</script>
