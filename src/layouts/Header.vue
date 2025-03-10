<template>
  <div>
    <router-link to="/">
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

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  div
      position: fixed
      width: 100%
      max-width: 1400px
      top: 0
      padding: 10px 20px
      display: flex
      justify-content: space-between
      align-items: center
      z-index: 100
      backdrop-filter: blur(14px)
      -webkit-backdrop-filter: blur(14px)
      background-color: rgba($light-clr, .05)
      box-shadow: 0 1px 0px rgba($dark-clr, .04)
      > a
          font-weight: 500
          font-size: 1.375rem
          color: $dark-clr
          line-height: 40px
          &:hover,
          &:focus-visible,
          &:active
            text-decoration: underline
          
</style>
