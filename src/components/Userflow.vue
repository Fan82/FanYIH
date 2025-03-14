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
  .tab-content
    > div
      overflow: hidden
      overflow-x: auto
      height: 100vh
  .project-img
    box-shadow: none
    background-color: transparent
    transform: scale(2.8)
    transform-origin: left top

  @media (min-width: 500px)
    .tab-content
      > div
        overflow: hidden
        height: auto
    .project-img
        transform: scale(1)
</style>
