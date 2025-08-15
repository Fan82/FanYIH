<template>
  <div class="project">
    <router-link :to="`/projects/${project.id}`">
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
    display: block
    cursor: pointer
    text-align: center
    background-color: #fff
    border-radius: calc($borderRadius * 2)
    padding: $base8
    overflow: hidden
    box-shadow: 0 2px 13px rgb(0 ,0 ,0, 8%)
    &::before
      content:''
      position: absolute
      top: 0
      left: 0
      display: none
      width: 100%
      height: 100%
      background-color: rgba($dark-clr, 0.7)
      backdrop-filter: blur(5px)
      transition: all 0.5s ease
      pointer-events: none
      cursor: none
      z-index: 1
    &:hover
      &::before
        display: block
      .project-content
        transform: translateY(-50%)
        opacity: 1
        z-index: 2
    @media (max-width: 1000px)
      &:hover
        .project-content
          transform: translateY(0)

    .project-img
      max-height: 420px
      width: fit-content
      margin: 0 auto
    .project-content
      position: absolute
      margin: 0
      padding: $base2
      left: 0
      bottom: 0
      width: 100%
      transform: translateY(100%)
      opacity: 0
      transition: all 0.5s ease
      transition-delay: .1s
      color: $light-clr
      pointer-events: none
      cursor: none

      img
          @include picImg(60px)
          cursor: pointer
      p
        font-size: $base8
        margin: $base4 0
      span
        // display: block
        width: 50%
        margin: 0 auto
        font-weight: lighter
        letter-spacing: $letterspace
        font-size: $base4
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        text-overflow: ellipsis
      @media (max-width: 1000px)
        span, p
          font-size: $base3
          width: 100%
          letter-spacing: $letterspace
          line-height: normal
        p
          margin: $base2 0
        img
          @include picImg(45px)
  section
    .project
      .project-content
        span
          display: none
</style>
