<template>
  <div></div>
</template>


<script>
export default {
  name: 'ScrollBtn',
};
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *
  div
    position: absolute
    top: 80vh
    left: 50%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: end
    gap: $base4
    transform: translate(-50%, -50%) 
    width: calc( $base * 20 )
    height: calc( $base * 20 )
    transition: opacity 0.3s ease
    overflow: hidden
    z-index: 100
    &::before
      content: ''
      position: absolute
      top: 0
      animation: sdb 2s ease infinite
      background-color: $grey-clr
      height: 28px
      // transform: translateY(-100%)
      width: 1.5px
    &::after
      content: ''
      position: absolute
      left: 50%
      bottom: 20px
      transform: translateX(-50%) rotate(-135deg)
      width: 8px
      height: 8px
      border-top: 1px solid $grey-clr
      border-left: 1px solid $grey-clr
  @keyframes sdb
    0%
      opacity: 1
      transform: translateY(-100%)
    20%
      opacity: 1
    100%
      opacity: 1
      transform: translateY(100%)
</style>
