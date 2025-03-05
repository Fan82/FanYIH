<template>
  <div>
    <h1>{{ project.name }}</h1>
    <p>{{ project.description }}</p>
  </div>
</template>
<script>
import projects from "@/data/projects.js"; // 引入專案資料

export default {
  props: ["id"], // 透過 props 接收 id
  computed: {
    project() {
      return this.projects.find((p) => p.id === this.id); // 不轉換數字
    },
  },
};
</script>
