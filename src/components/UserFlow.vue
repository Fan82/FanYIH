<template>
  <div class="grid">
    <img class="project-img" :src="project.image" :alt="project.name" :class="{ 'slide-scrolled': isScrolled }" />
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