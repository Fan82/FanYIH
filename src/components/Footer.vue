<template>
  <button ref="menuButton" @click="toggleMenu">
    Contact
  </button>
  <div v-show="isMenuVisible" ref="menuContainer">
    <div @click="closeMenu" aria-label="Close menu">← Back</div>
    <a href="/files/FanYiH_resume.pdf" target="_blank">Resume</a>
    <a href="mailto:fys840802@gmail.com?subject=Looking forward to see you soon">Email</a>
    <a href="https://www.linkedin.com/in/fanyihsuan/">LinkedIn</a>
    <a href="https://www.behance.net/congee_88">Behance</a>
  </div>
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
      const clickedInsideButton = this.$refs.menuButton && this.$refs.menuButton.contains(event.target);
      const clickedInsideMenu = this.$refs.menuContainer && this.$refs.menuContainer.contains(event.target);
      if (!clickedInsideButton && !clickedInsideMenu) {
        this.isMenuVisible = false;
        document.body.classList.remove('no-scroll');
      }
    },
    closeMenu() {
      this.isMenuVisible = false;
      document.body.classList.remove('no-scroll');
    }
  },
  watch: {
    isMenuVisible(newVal) {
      document.body.classList.toggle('no-scroll', newVal);
    }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
    document.body.classList.remove('no-scroll');
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
    background-color: $light-clr
    cursor: pointer
    box-shadow: 0 0 20px rgba($dark-clr, 0.3)
    outline: none
    z-index: 101
    ~ div
      position: fixed
      top: 0
      width: 100vw
      left: 50%
      height: 100vh
      overflow: auto
      transform: translateX(-50%)
      transform-origin: center bottom
      background-color: $dark-clr
      padding: $base8 calc($base8 * 2)
      transition: display 1s linear
      z-index: 102
      > div
        background: transparent
        color: rgba($light-clr, 0.6)
        font-size: $base7
        padding: calc($base4 * 2)
        cursor: pointer
        text-align: left
      a
        position: relative
        display: block
        text-align: left
        font-size: calc($base8 * 2)
        color: $light-clr
        padding: $base4 $base8
        font-weight: bolder
        &::before
          content: ''
          position: absolute
          bottom: 0px
          width: 0
          height: 4px
          background-color: $main
          transition: width 0.2s linear
        &:hover
          color: $main
          &::before
            width: 100%
      @media (max-width: 900px)
        padding: $base7
        > div
          font-size: $base4
          padding: $base5 0
        a
          font-size: $base8
          padding: $base5 0
</style>