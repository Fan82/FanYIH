<template>
  <div>
    <Project v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>
<script>
import Project from "@/layouts/Project.vue";
import projects from "@/data/projects.js"; // 引入專案資料

export default {
  components: {
    Project
  },
  data() {
    return {
      projects, // 直接使用從 data 檔案匯入的專案資料
    };
  },
};
</script>
<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  div
    position: sticky
    top: 0
  //   display: grid
  //   grid-template-columns: repeat(2, 1fr)
  //   -webkit-box-pack: justify
  //   justify-content: space-between
  //   gap: $base8
  section
    div
      position: relative
      display: flex
      overflow: hidden
      overflow-x: scroll
      margin-top: calc( $base8 * 2)
      &::before
        content: 'More Projects'
        position: sticky
        left: 0
        top: 0
        white-space: nowrap
        font-size: $base5
      .project
        min-width: 30%
        max-width: 30%
        
    > div
        margin-top: calc( $base8 * 4)
        background-color: #fff
        padding: $base8
        border-radius: $borderRadius
</style>
