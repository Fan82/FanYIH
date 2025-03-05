<template>
  <div class="project">
    <router-link :to="`/projects/${project.id}`" class="project-box">
      <img class="project-img" :src="project.image" :alt="project.name" />
    </router-link>
    <div class="project-content">
      <div class="project-pic">
        <img :src="project.logo" :alt="`${project.name} logo`" />
      </div>
      <div class="project-detail">
        <p>{{ project.name }}</p>
        <span>{{ project.detail }}</span>
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
