<!-- <template>
  <div class="top">
    <router-link to="/" class="logo">
      Fan YIHsuan
    </router-link>
    <nav v-if="showNav">
      <router-link to="/about" v-if="$route.path === '/projects'">about</router-link>
      <router-link to="/projects" v-if="$route.path === '/about'">project</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    showNav() {
      return this.$route.path !== "/" && this.$route.path !== "/home";
    }
  }
};
</script> -->
<template>
  <div class="top">
    <router-link to="/" class="logo">
      Fan YIHsuan
    </router-link>
    <nav>
      <router-link v-if="showAboutLink" to="/about">about</router-link>
      <router-link v-if="showProjectLink" to="/projects">project</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    showAboutLink() {
      return this.$route.path === '/' || this.$route.path === '/projects';
    },
    showProjectLink() {
      return this.$route.path === '/' || this.$route.path === '/about';
    },
  },
};
</script>