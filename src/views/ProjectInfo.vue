<template>
  <div class="wrapper" v-if="project">
    <div class="project">
      <div>
        <img :src="project.logo" :alt="`${project.name} logo`" />
        <p>{{ project.name }}</p>
        <span>{{ project.detail }}</span>
      </div>
      <img :src="project.hero" :alt="`${project.name} hero`" />
    </div>
    <Statement v-if="project" :projectId="project.id" />
    <Inspiration v-if="project" :projectId="project.id" />
    <Process v-if="project" :projectId="project.id" />
  </div>
</template>

<script>
import projects from "@/data/projects.js";
import Statement from "@/layouts/Statement.vue";
import Inspiration from "@/layouts/Inspiration.vue";
import Process from "@/layouts/Process.vue";


export default {
  components: { Statement, Process, Inspiration },
  computed: {
    // 從 Vue Router 取得當前的 projectId
    projectId() {
      return this.$route.params.id;
    },
    // 根據 projectId 找到對應的專案資料
    project() {
      return projects.find((p) => p.id === this.projectId) || null;
    },
  },
};
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *
  .wrapper
    padding: 0 calc($base * 4)
    img
      @include imgDefault(contain)
      @include picImg(40px)
  
  .project
    display: flex
    align-items: center
    justify-content: space-between
    > img
      width: 45%
      animation: scrollMove 7s linear 4
      transform-origin: center

    p
      font-size: calc($base * 6)
      font-weight: bolder
      display: inline-block
      margin-left: calc($base * 4)
      line-height: 40px
      vertical-align: bottom
    span
        white-space: pre-wrap
        display: block
        margin-top: calc($base * 6)
        font-size: calc($base * 6)
        line-height: calc($base * 12)
        font-weight: lighter
  
  @keyframes scrollMove
    0%, 100%
      transform: translateY(0)
    50%
      transform: translateY(5%)
  
</style>
