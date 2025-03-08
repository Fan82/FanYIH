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
      const basePath = `../src/assets/images/projects/${this.projectId}/page/`;
      return Array.from({ length: 11 }, (_, i) => `${basePath}page_${i + 1}.png`);
    },
  },
};
</script>
