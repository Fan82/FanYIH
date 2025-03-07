<template>
  <div class="wrapper flex">
    <div class="title block" :class="{ 'title--scrolled': isScrolled }">
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