<template>
  <div class="project">
    <small>UX/UI Case Study</small>
    <router-link :to="`/projects/${project.id}`" class="project-box">
      <img class="project-img" :src="project.image" :alt="project.name" />
    </router-link>
    <div class="project-content">
      <img :src="project.logo" :alt="`${project.name} logo`" />
      <div>
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
    cursor: pointer
    // &:hover
    //     &::before
    //         opacity: 1
    //     &::after
    //         opacity: 0.3
    // &::before,
    // &::after
    //     content: ''
    //     position: absolute
    //     display: block
    //     border-radius: $borderRadius
    //     top: 0
    //     left: 0
    //     width: 100%
    //     height: 100%
    //     transition: opacity 400ms cubic-bezier(0.215, 0.61, 0.355, 1)
    //     backdrop-filter: blur(8px)
    //     background-color: rgba(0,0,0,0)
    //     opacity: 0
    //     -webkit-backdrop-filter: blur(8px)
    //     z-index: 1
    //     pointer-events: none
    // &::after
    //     opacity: 0
    //     background-color: #000000
    .project-content
      // opacity: 0
      position: absolute
      margin: 0
      padding: calc( $base * 2 )
      left: 0
      bottom: 0
      display: flex
      justify-content: flex-start
      align-items: center
      gap: calc( $base * 2 )
      width: 100%
      cursor: pointer
      
      > div
        max-width: calc(100% - 50px)

      img
          @include picImg(40px)
          background-color: $light-clr
          cursor: pointer

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
    transition: all 0.2s linear
</style>
