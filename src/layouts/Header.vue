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
      return this.$route.path !== "/about";
    },
    showProjectLink() {
      return this.$route.path !== "/projects";
    },
  },
};
</script>