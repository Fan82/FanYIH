<template>
  <div class="project">
    <small>UX/UI Case Study</small>
    <router-link :to="`/projects/${project.id}`" class="project-box">
      <img class="project-img" :src="project.image" :alt="project.name" :class="{ 'slide-scrolled': isScrolled }" />
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
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 30;  // 根據滾動高度來調整
    },
  },
};
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *
  .project
     small
        position: absolute
        top: $base
        left: calc( $base * 2 )
        background-color: rgba($grey-clr ,0.1 )
        font-size: calc( $base * 2 )
        padding: $base
        border-radius: $base
        line-height: normal
  p, span
    display: block
</style>
