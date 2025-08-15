<template>
  <button ref="menuButton" @click="toggleMenu">
    Contact
    <div v-show="isMenuVisible">
      <a href="mailto:fys840802@gmail.com?subject=Looking forward to see you soon">Email</a>
      <a href="https://www.linkedin.com/in/fanyihsuan/">LinkedIn</a>
      <a href="https://www.behance.net/congee_88">Behance</a>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    toggleMenu(event) {
      this.isMenuVisible = !this.isMenuVisible;
    },
    handleClickOutside(event) {
      // 如果點擊的目標不是 button 或 menu 內部，就關閉
      if (this.$refs.menuButton && !this.$refs.menuButton.contains(event.target)) {
        this.isMenuVisible = false;
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  }
};
</script>


<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  button
    position: fixed
    bottom: $base5
    left: 50%
    transform: translateX(-50%)
    width: calc( $base * 50)
    height: 50px
    border-radius: calc( $borderRadius * 4 )
    backdrop-filter: blur(14px)
    -webkit-backdrop-filter: blur(14px)
    background-color: rgba($light-clr, .05)
    cursor: pointer
    box-shadow: 0 4px 8px rgba($dark-clr, 0.1)
    outline: none
    z-index: 100
    &:hover,
    &:active,
    &:focus
        box-shadow: inset 0px 0 1px rgba($dark-clr, 0.5)
    div
        position: absolute
        bottom: 60px
        width: 100%
        background-color: $light-clr
        border-radius: $base2
        padding: $base2
        box-shadow: 0px 0px 5px rgba($light-clr, 0.05), inset 0px 0 1px rgba($dark-clr, 0.5)
        z-index: 10
        a
            display: block
            padding: $base2
            border-radius: $base
            width: 100%
            text-align: center
            &:hover
                color: $main
</style>