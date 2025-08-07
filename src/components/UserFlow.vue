<template>
  <div>
    <img class="project-img" :src="project.flowImage" :alt="project.name" />
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

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  .project-img
      background-color: transparent
      box-shadow: none
  @media (max-width: 1000px)
    div
      overflow: hidden
      overflow-x: auto 
      height: 100vh
    .project-img
      transform: scale(2.5)
      transform-origin: left top
</style>
