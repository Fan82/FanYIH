<template>
  <div class="top">
    <router-link to="/" class="logo">
      Fan YIHsuan
    </router-link>
    <nav>
      <router-link to="/about">about</router-link>
      <router-link to="/projects">project</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Header'
};
</script>