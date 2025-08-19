<template>
  <div class="project">
    <router-link :to="`/projects/${project.id}`">
      <img :src="project.image" :alt="project.name" />
      <video :src="project.videoMock" autoplay loop muted playsinline></video>
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
  props: ["projectId"],
  computed: {
    project() {
      return projects.find((p) => p.id === this.projectId) || null;
    },
    projectData() {
      return projects.find((project) => project.id === this.projectId) || null;
    },
  },
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
    height: 100vh
    overflow: hidden
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
      z-index: 2
    &:hover
      &::before
        display: block
      .project-content
        bottom: 25%
        transform: translateY(-50%)
        opacity: 1
        z-index: 2

    img
      position: relative
      width: fit-content
      margin: 0 auto
      z-index: 1

    a > img
      position: absolute
      left: 50%
      top: 50%
      width: 30%
      transform: translate(-50%, -50%)
    .project-content
      position: absolute
      margin: 0
      padding: $base2
      left: 0
      width: 100%
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
        width: 50%
        margin: 0 auto
        letter-spacing: $letterspace
        font-size: $base4
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 2
        overflow: hidden
        text-overflow: ellipsis
  section
    .project
      &:hover
        .project-content
          bottom: 0
      a img
        height: 30vh
      .project-content
        span
          display: none
  video
    opacity: 1
    filter: brightness(0.25)
    position: absolute
    left: 0
    top: 50%
    transform: translateY(-50%)
    width: 100%
    pointer-events: none
    cursor: none
    z-index: 0

  @media (hover: hover) and (pointer: fine)
    .project
      &:hover
        &::before
          display: block
        .project-content
          bottom: 25%
          transform: translateY(-50%)
          opacity: 1
          z-index: 2

      .project-content
        bottom: 0
        transform: translateY(100%)
        opacity: 0

  @media (hover: none) and (pointer: coarse) 
    .project
      a > img
        display: none
      .project-content  
        bottom: 20%
        transform: translateY(-50%)
        opacity: 1
        z-index: 2
        span
          width: 80%
          -webkit-line-clamp: 3

</style>
