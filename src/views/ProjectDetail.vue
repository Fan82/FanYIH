<template>
  <div class="wrapper" v-if="project">
    <div class="project">
      <img :src="project.logo" :alt="`${project.name} logo`" />
      <p>{{ project.name }}</p>
      <span>{{ project.detail }}</span>
    </div>
    <nav>
      <a href="javascript:void(0)" :class="{ active: activeTab === 'UI Screen' }" @click="activeTab = 'UI Screen'">
        UI Screen
      </a>
      <a href="javascript:void(0)" :class="{ active: activeTab === 'Overview' }" @click="activeTab = 'Overview'">
        Overview
      </a>
      <a href="javascript:void(0)" :class="{ active: activeTab === 'User Flow' }" @click="activeTab = 'User Flow'">
        User Flow
      </a>
    </nav>
    <div class="tab-content">
      <UIScreen v-if="activeTab === 'UI Screen'" :images="project.uiScreens" :projectId="project.id" />
      <Overview v-if="activeTab === 'Overview'" :projectId="project.id" />
      <UserFlow v-if="activeTab === 'User Flow'" :project="project" />
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects.js";
import UIScreen from "@/layouts/UIScreen.vue";
import Overview from "@/layouts/Overview.vue";
import UserFlow from "@/layouts/UserFlow.vue";

export default {
  components: { UIScreen, Overview, UserFlow },
  data() {
    return {
      activeTab: "UI Screen",
    };
  },
  computed: {
    projectId() {
      return this.$route.params.id;
    },
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
  p, span
    display: block
  nav
    margin: calc( $base * 2 ) auto calc( $base * 6 )
    a
      padding: calc( $base * 2 ) calc( $base * 3.2 )
  .project
    img
      @include imgDefault(contain)
      @include picImg(55px)
    p
      font-size: 20px
      font-weight: 400
      margin: calc( $base * 2 ) 0 $base
    span
        white-space: pre-wrap
  @media (min-width: 500px)
    .wrapper
      .project
        margin: calc( $base * 1 ) auto calc( $base * 5 ) auto
        padding-left: 70px
        img
          position: absolute
          left: 0
          top: 0
        p 
          font-weight: 600
        span
          font-size: 14px
      .tab-content
        .project
          padding: 0
  @media (min-width: 1020px)
    .wrapper
      .project
        margin-bottom: calc( $base * 8 )
  
</style>
