<template>
  <div class="title">
    <div>User Design. Interfaces.
      <br> Front-End.
      <br> Systems. Strategy.
    </div>
  </div>
  <div class="wrapper">
    <div class="wrapper-box">
      <div class="wrapper-title">
        About
        <p>
          UI Designer
          <br>
          Frontend Developer
        </p>
      </div>
      <router-link to="/about" class="button">
        more
        <div class="arrow"></div>
      </router-link>
    </div>
    <div class="wrapper-box">
      <div class="wrapper-title">
        Design Project
        <p>
          A digital artisan specializing in the creation of aesthetically pleasing user interfaces.
        </p>
      </div>
      <router-link to="/projects" class="button">
        more
        <div class="arrow"></div>
      </router-link>
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
};
</script>