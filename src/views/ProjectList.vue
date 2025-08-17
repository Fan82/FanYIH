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
  section
    div
      position: relative
      display: flex
      overflow: hidden
      overflow-x: scroll
      margin-top: calc( $base8 * 2)
      .project
        min-width: 30%
        max-width: 30%
        
    // > div
    //     margin: calc( $base8 * 2) 0 calc( $base8 * 2) calc( $base8 * -2)
    //     background-color: #fff
    //     padding: $base8
    //     border-radius: 0 $borderRadius $borderRadius 0
    //     &::before
    //       content: 'More projects'
    //       position: sticky
    //       left: 30px
    //       top: 0
    //       white-space: nowrap
    //       font-size: $base5
    //       line-height: normal
    //     .project
    //       height: auto
</style>
