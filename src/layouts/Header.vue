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
      top: 0
      width: 100%
      // max-width: 1400px
      padding: $base4 $base5
      display: flex
      justify-content: space-between
      align-items: center
      z-index: 100
      mix-blend-mode: difference
      will-change: transfer
      // mix-blend-mode: difference
      // will-change: transform
      // backdrop-filter: blur(14px)
      // -webkit-backdrop-filter: blur(14px)
      // background-color: rgba($light-clr, .05)
      // box-shadow: 0 1px 0px rgba($dark-clr, .04)
      // background-attachment: scroll
      > a
          font-weight: 500
          font-size: 1.375rem
          color: $light-clr
          line-height: 40px
          &:hover,
          &:focus-visible,
          &:active
            text-decoration: underline
  nav
      a
          @include button($dark-clr, $light-clr, $light-clr, $dark-clr)
          box-shadow: inset 0 0 0 .2px rgba($light-clr, 0.2)
          margin-right: calc( $base * 2 )
</style>
