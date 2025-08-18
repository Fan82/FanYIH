<template>
  <div class="slide">
    <h4>
      <span v-for="(word, i) in splitTitle" :key="`title-${i}`" :style="{
        transitionDelay: `${i * 1.2}s`,
      }">{{ word }}
      </span>
    </h4>
    <p v-if="slide.slogan" :style="sloganStyles">
      {{ slide.slogan }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    slide: Object,
    active: Boolean,
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    splitTitle() {
      return this.slide.title.split(' ')
    },
    sloganStyles() {
      // Animate slogan based on scroll progress
      const translateY = (1 - this.progress) * 90;

      return {
        transform: `translateY(${translateY}px)`,
        transition: 'all 0.6s ease-out'
      };
    }
  },
}
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *
  
  .slide
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    padding: 0 $base8
    margin: 0 auto
    
    h4
      font-size: calc($base * 30)
      font-weight: bold
      letter-spacing: $letterspace
      color: $dark-clr
      margin: 0

    span
      will-change: transform
      transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1)
      display: inline-block
    p
      font-size: $base7
      color: $grey-clr
      white-space: nowrap
      will-change: transform

  // Disable animations for reduced motion
  @media (prefers-reduced-motion: reduce)
    span,
    p
      transition: none !important
      transform: none !important
  @media (max-width: 900px)
    .slide
      h4
        font-size: calc($base8 * 2)
      p
        font-size: $base5
        white-space: wrap
</style>
