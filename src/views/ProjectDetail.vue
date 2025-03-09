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
    </nav>

    <!-- Tab 內容區，使用元件 -->
    <div class="tab-content">
      <UIScreen v-if="activeTab === 'UI Screen'" :images="project.uiScreens" :projectId="project.id" />
      <Overview v-if="activeTab === 'Overview'" :projectId="project.id" />
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects.js";
import UIScreen from "@/components/UIScreen.vue";
import Overview from "@/components/Overview.vue";

export default {
  components: { UIScreen, Overview },
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
    margin: calc( $base * 6 ) auto
  .project
      img
          @include imgDefault(contain)
          @include picImg
      p
          margin: calc( $base * 2.5 ) 0 $base
      span
          white-space: pre-wrap
  
</style>
