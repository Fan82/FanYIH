<template>
  <main>
    <ScrollBtn />
    <div class="slider" @wheel="handleScroll" @keydown="handleKey" tabindex="0" ref="sliderRef"
      :class="{ 'slides-completed': slidesCompleted }">
      <Slide v-for="(slide, index) in extendedSlides" :key="`slide-${index}`" :slide="slide"
        :active="index === currentExtendedIndex" />
    </div>
  </main>
  <ProjectList />
</template>

<script>
// 引入 ProjectList 組件
import ScrollBtn from '../components/ScrollBtn.vue';
import Slide from './Slide.vue'
import ProjectList from './ProjectList.vue';

export default {
  name: 'Home',
  components: {
    Slide,
    ProjectList,
    ScrollBtn,
  },
  data() {
    return {
      currentIndex: 0,
      currentExtendedIndex: 0,
      isSliding: false,
      wheelTimeout: null,
      slidesCompleted: false,
      viewedSlides: new Set(),
      slides: [
        {
          title: 'UI/ UX Design.',
          slogan: 'Bridging Vision and Execution in Every Product.'
        },
        {
          title: 'Front-End.',
          slogan: '100% Human-Centered, 0% Bootstrap.'
        },
        {
          title: 'Design Systems.',
          slogan: 'Half designer, half engineer — Full-time problem solver.'
        },
        {
          title: 'Startup Mindset.',
          slogan: 'Agile Driven, Rapid Prototyping.'
        },
      ],
    }
  },
  computed: {
    // Create extended slides array for seamless looping
    extendedSlides() {
      return [...this.slides, ...this.slides, ...this.slides, ...this.slides]
    }
  },
  methods: {
    goToNext() {
      if (this.isSliding) return
      this.isSliding = true

      // Track viewed slides
      this.viewedSlides.add(this.currentIndex)

      this.currentIndex = (this.currentIndex + 1) % this.slides.length
      this.currentExtendedIndex = this.currentExtendedIndex + 1

      // Check if all slides have been viewed
      this.checkSlidesCompletion()

      // Reset to middle section when reaching the end
      if (this.currentExtendedIndex >= this.slides.length * 3) {
        setTimeout(() => {
          this.currentExtendedIndex = this.currentIndex + this.slides.length
        }, 1200) // Wait for transition to complete
      }

      this.resetSlideDelay()
    },
    checkSlidesCompletion() {
      // Check if all slides have been viewed
      if (this.viewedSlides.size >= this.slides.length) {
        this.slidesCompleted = true
        // Remove wheel event listener to allow normal scrolling
        document.removeEventListener('wheel', this.handleGlobalWheel)
      }
    },
    handleScroll(event) {
      // If slides are completed, allow normal page scrolling
      if (this.slidesCompleted) {
        this.scrollToNextSection()
        return
      }

      // Prevent default browser behavior
      event.preventDefault()

      if (this.isSliding) return

      // Add a small delay to prevent rapid firing
      if (this.wheelTimeout) {
        clearTimeout(this.wheelTimeout)
      }

      this.wheelTimeout = setTimeout(() => {
        event.deltaY > 0 ? this.goToNext() : this.goToPrev()
      }, 100)
    },
    scrollToNextSection() {
      // Scroll to the next section (ProjectList)
      const projectList = document.querySelector('.project-list')
      if (projectList) {
        projectList.scrollIntoView({ behavior: 'smooth' })
      }
    },
    resetSlideDelay() {
      setTimeout(() => {
        this.isSliding = false
      }, 1200) // 與動畫時間同步
    },
    handleGlobalWheel(event) {
      // Only handle if the event target is within our slider
      if (this.$refs.sliderRef && this.$refs.sliderRef.contains(event.target)) {
        this.handleScroll(event)
      }
    },
  },
  mounted() {
    // Initialize extended index to middle section
    this.currentExtendedIndex = this.currentIndex + this.slides.length

    // Add the first slide to viewed slides
    this.viewedSlides.add(this.currentIndex)

    // 聚焦以接收鍵盤事件
    this.$refs.sliderRef.focus()

    // Add global wheel event listener as fallback
    document.addEventListener('wheel', this.handleGlobalWheel, { passive: false })
  },
  beforeUnmount() {
    // Clean up global event listener
    document.removeEventListener('wheel', this.handleGlobalWheel)
    if (this.wheelTimeout) {
      clearTimeout(this.wheelTimeout)
    }
  }
}
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *


  .slider
    position: relative
    height: calc( 100vh - 100px )
    outline: none
    cursor: none
    overflow: hidden
</style>
