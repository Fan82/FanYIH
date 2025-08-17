<template>
  <div class="slide" :class="{ active }">
    <div class="slide-content">
      <span v-for="(word, i) in splitTitle" :key="`title-${i}`" :style="{ transitionDelay: `${i * 0.1}s` }">
        {{ word }}
      </span>
    </div>
    <div class="slide-content">
      <p v-if="slide.slogan">
        {{ slide.slogan }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slide: Object,
    active: Boolean,
  },
  computed: {
    splitTitle() {
      return this.slide.title.split(' ')
    },
  },
}
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *
  
  .slide
    position: absolute
    bottom: $base
    left: $base5
    width: 100%
    height: 70%
    padding: $base5
    opacity: 0
    transform: scale(0.95)
    transition: all .5s ease
    display: block
    overflow: hidden
    z-index: 0
    
    .slide-content
      display: block
      overflow: hidden
    
    &.active
      opacity: 1
      transform: scale(1)
      z-index: 1
      
      span, p
        transform: translateY(0)
        opacity: 1
      
    span, p
      transform: translateY(100%)
      display: inline-block
      opacity: 0
      color: $dark-clr
      transition: all 0.8s ease
      font-size: calc($base * 30)
      font-weight: bold
      letter-spacing: $letterspace
      margin-right: 10px
      @media (max-width: 500px)
        font-size: calc($base * 10)
    span
      line-height: calc($base * 40)
    p
      font-size: $base7
      font-weight: normal
      @media (max-width: 500px)
        font-size: $base5


</style>
