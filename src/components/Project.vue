<template>
  <div class="project">
    <small>UX/UI Case Study</small>
    <router-link :to="`/projects/${project.id}`" class="project-box block">
      <img class="project-img" :src="project.image" :alt="project.name" />
    </router-link>
    <div class="project-content">
      <div class="project-pic">
        <img :src="project.logo" :alt="`${project.name} logo`" />
      </div>
      <div class="project-detail">
        <p class="block">{{ project.name }}</p>
        <span class="block">{{ project.detail }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>
