<template>
  <button ref="menuButton" @click="toggleMenu">
    Contact
    <div v-show="isMenuVisible">
      <a :href="resumeUrl" target="_blank">Resume</a>
      <a href="mailto:fys840802@gmail.com?subject=Looking forward to see you soon">Email</a>
      <a href="https://www.linkedin.com/in/fanyihsuan/">LinkedIn</a>
      <a href="https://www.behance.net/congee_88">Behance</a>
    </div>
  </button>
</template>

<script>
const resumeUrl = new URL('@/public/files/resume.pdf', import.meta.url).href;

export default {
  name: 'Footer',
  data() {
    return {
      isMenuVisible: false,
      resumeUrl,
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
    position: sticky
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
    div
        position: absolute
        bottom: -20px
        width: 100vw
        left: 50%
        height: 100vh
        transform: translateX(-50%)
        transition: all 0.2s linear
        transform-origin: center bottom
        background-color: $dark-clr
        padding: $base8 calc($base8 * 2)
        transition: display 1s linear
        z-index: 10
        &::before
          content: 'Contact'
          display: block
          width: 100%
          font-size: calc($base8 * 2)
          color: rgba($light-clr, 0.5)
          padding: calc($base8 * 2) $base8 $base4 $base8
          text-align: left
        &::after
          content: '← Back'
          position: absolute
          top: $base4
          left: calc($base8 * 2)
          display: block
          width: 100%
          font-size: $base8
          color: rgba($light-clr, 0.25)
          padding:  calc($base4 * 2)
          text-align: left
          cursor: pointer
        a
            position: relative
            display: block
            padding: $base2
            width: 80%
            text-align: left
            font-size: calc($base8 * 2)
            color: $light-clr
            padding:  calc($base4 * 2)
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
                      
</style>