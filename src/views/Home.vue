<template>
  <div class="wrapper">
    <div :class="{ 'slide-scrolled': isScrolled }">
      UI/ UX Design.
      <br>
      Front-End.
      <br>
      Systems.
      <p>Bringing dreams to life,
        <br>
        one design at a time
      </p>
    </div>
  </div>
  <ProjectList />
</template>

<script>
// 引入 ProjectList 組件
import ProjectList from './ProjectList.vue';

export default {
  name: 'Home',
  components: {
    ProjectList, // 註冊 ProjectList 組件
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

  .wrapper
    > div
      position: relative
      width: 100%
      color: $dark-clr
      font-size: calc($base * 10)
      font-weight: bold
      line-height: calc($base * 14)
      letter-spacing: $letterspace
      @include slideDown
      display: block

      p
        margin-top: calc($base * 2)
        line-height: normal
        letter-spacing: $letterspace
        color: $dark-clr
        font-weight: 100
        line-height: calc($base * 10)
        font-size: calc($base * 6)
</style>
