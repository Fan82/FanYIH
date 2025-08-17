<template>
  <section v-if="project">
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
    <VideoFlow v-if="project" :projectId="project.id" />
    <!-- <ProjectList v-if="project" :projectId="project.id" /> -->
    <!-- <moreProject v-if="project" :projectId="project.id" /> -->
  </section>
</template>

<script>
import projects from "@/data/projects.js";
import Statement from "@/layouts/Statement.vue";
import VideoFlow from "@/layouts/VideoFlow.vue";
import Inspiration from "@/layouts/Inspiration.vue";
import Process from "@/layouts/Process.vue";
// import ProjectList from "@/views/ProjectList.vue";

// import moreProject from "@/layouts/moreProject.vue";


export default {
  components: { Statement, Process, Inspiration, VideoFlow },
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
  section
    padding: 0 calc($base8 * 2)
    img
      @include imgDefault(contain)
      @include picImg(40px)

  .project
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: $base8
    > img
      width: 50%
      margin: $base8 0
    p
      font-size: $base6
      font-weight: bolder
      display: inline-block
      margin-left: $base4
      line-height: 40px
      vertical-align: bottom
    span
        white-space: pre-wrap
        display: block
        margin-top: $base6
        font-size: $base5
        line-height: calc($base * 10)
        font-weight: 300
    @media (max-width: 1000px)
      span
        font-size: $base4
        line-height: $base6
    @media (max-width: 500px)
      flex-direction: column
      align-items: start
      gap: $base6
      margin-bottom: $base6
      > img
        width: 100%
      span
        line-height: $base5
        margin-top: $base2
  // -- project -------------------------------------------
  #bookFlight, #publicTransp
    .project
      > img
        animation: scrollMove 7s linear 4
        transform-origin: center
  #easyBank
    .project
      padding-top: calc($base8 * 4)
      flex-direction: column
      > div
        text-align: center
      > img
        position: relative
        width: 100%
        max-height: 450px
        animation: none
        object-fit: cover
        aspect-ratio: auto
        margin: calc($base * 20) 0
  // ------------------------------------------------------
  @keyframes scrollMove
    0%, 100%
      transform: translateY(0)
    50%
      transform: translateY(5%)
  
</style>
