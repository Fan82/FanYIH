<template>
  <div class="wrapper" v-if="project">
    <div class="title">
      <img class="project-img" :src="project.logo" :alt="project.name" />
      <h2>{{ project.name }}</h2>
      <span>{{ project.detail }}</span>
      <button class="btn modal-trigger" data-target="modal1">Apps</button>
    </div>

    <!-- Tab 選單 -->
    <div class="tab">
      <a href="javascript:void(0)" class="btn-tab" :class="{ active: activeTab === 'UI Screen' }"
        @click="activeTab = 'UI Screen'"> UI Screen </a>
      <a href="javascript:void(0)" class="btn-tab" :class="{ active: activeTab === 'Wireframe' }"
        @click="activeTab = 'Wireframe'"> Wireframe </a>
      <a href="javascript:void(0)" class="btn-tab" :class="{ active: activeTab === 'Flow Tree' }"
        @click="activeTab = 'Flow Tree'"> Flow Tree </a>
    </div>

    <!-- Tab 內容區，使用元件 -->
    <div class="tab-content">
      <UIScreen v-if="activeTab === 'UI Screen'" :images="project.uiScreens" />
      <Wireframe v-if="activeTab === 'Wireframe'" :images="project.wireframes" />
      <FlowTree v-if="activeTab === 'Flow Tree'" :images="project.flowTree" />
    </div>
  </div>
</template>

<script>
import projects from "@/data/projects.js";
import UIScreen from "@/components/UIScreen.vue";
import Wireframe from "@/components/Wireframe.vue";
import FlowTree from "@/components/FlowTree.vue";

export default {
  components: { UIScreen, Wireframe, FlowTree },
  props: ["id"],
  data() {
    return {
      activeTab: "UI Screen",
    };
  },
  computed: {
    project() {
      return projects.find((p) => p.id === this.id);
    },
  },
};
</script>
