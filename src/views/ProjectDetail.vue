<!-- delete -->
<template>
  <section v-if="project">
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
  </section>
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
  section
    padding: 0 $base4
  p, span
    display: block
  nav
    margin: $base2 auto $base6
    a
      padding: $base2 $base3
  .project
    img
      @include imgDefault(contain)
      @include picImg(55px)
    p
      font-size: 20px
      font-weight: 400
      margin: $base2 0 $base
    span
        white-space: pre-wrap
  
</style>
