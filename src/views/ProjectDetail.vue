<template>
  <div class="wrapper" v-if="project">
    <div class="project">
      <img :src="project.logo" :alt="`${project.name} logo`" />
      <p>{{ project.name }}</p>
      <span>{{ project.detail }}</span>
    </div>
    <!-- Tab 選單 -->
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
    <!-- Tab 內容區，使用元件 -->
    <div class="tab-content">
      <UIScreen v-if="activeTab === 'UI Screen'" :images="project.uiScreens" :projectId="project.id" />
      <Overview v-if="activeTab === 'Overview'" :projectId="project.id" />
      <UserFlow v-if="activeTab === 'User Flow'" :project="project" />
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects.js";
import UIScreen from "@/components/UIScreen.vue";
import Overview from "@/components/Overview.vue";
import UserFlow from "@/components/UserFlow.vue";

export default {
  components: { UIScreen, Overview, UserFlow },
  data() {
    return {
      activeTab: "UI Screen",
    };
  },
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
