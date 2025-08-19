<template>
  <main>
    <ScrollBtn />

    <!-- Slides section - only shows on first visit -->
    <div v-if="!hasViewedSlides" class="slides-section" @scroll="handleScroll" ref="slidesSection">
      <div class="scroll-spacer"></div>
      <div class="slide-wrapper" :style="slideStyles">
        <Slide :slide="currentSlide" :active="true" :progress="scrollProgress" />
      </div>
    </div>
    <div v-if="hasViewedSlides" class="final-slide">
      <Slide :slide="finalSlide" :active="true" :progress="1" />
    </div>

    <!-- Rest of the page content -->
    <ProjectList />
  </main>
</template>

<script>
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
      scrollProgress: 0,
      currentSlideIndex: 0,
      isScrolling: false,
      hasViewedSlides: false, // Track if user has seen slides
      slides: [
        {
          title: 'UI/UX Design.',
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
    currentSlide() {
      return this.slides[this.currentSlideIndex];
    },
    finalSlide() {
      // Return the last slide (4th slide)
      return this.slides[this.slides.length - 1];
    },
    slideStyles() {
      // Create dynamic styles based on scroll progress
      const scale = 1 + (this.scrollProgress * 0.5);

      return {
        transform: `scale(${scale})`,
        transition: this.isScrolling ? 'none' : 'all 0.3s ease-out'
      };
    }
  },
  methods: {
    handleScroll(event) {
      this.isScrolling = true;

      const container = event.target;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;

      // Calculate scroll progress (0 to 1)
      this.scrollProgress = Math.min(scrollTop / scrollHeight, 1);

      // Change slide based on scroll progress
      const slideIndex = Math.floor(this.scrollProgress * this.slides.length);
      this.currentSlideIndex = Math.min(slideIndex, this.slides.length - 1);

      // Check if slides are completed (user has scrolled to the end)
      if (this.scrollProgress >= 0.95) {
        this.completeSlides();
      }

      // Clear scrolling state after a delay
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    },

    completeSlides() {
      // Mark slides as viewed and save to localStorage
      this.hasViewedSlides = true;
      localStorage.setItem('hasViewedSlides', 'true');

      // Smooth transition to normal page
      setTimeout(() => {
        this.scrollToProjects();
      }, 500);
    },

    scrollToProjects() {
      // Scroll to projects section smoothly
      const projectList = document.querySelector('.project');
      if (projectList) {
        projectList.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback: scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },

    checkIfSlidesViewed() {
      // Check localStorage to see if user has already viewed slides
      const viewed = localStorage.getItem('hasViewedSlides');
      if (viewed === 'true') {
        this.hasViewedSlides = true;
      }
    },

    resetSlides() {
      // Optional method to reset slides (for testing)
      this.hasViewedSlides = false;
      localStorage.removeItem('hasViewedSlides');
      this.scrollProgress = 0;
      this.currentSlideIndex = 0;
    }
  },
  mounted() {
    // Check if user has already viewed slides
    this.checkIfSlidesViewed();

    this.$nextTick(() => {
      // Only setup scroll if slides haven't been viewed
      if (!this.hasViewedSlides && this.$refs.slidesSection) {
        this.$refs.slidesSection.scrollTop = 0;
      }
    });

    // Optional: Add keyboard shortcut to reset (for development)
    // Press 'R' key to reset slides
    if (process.env.NODE_ENV === 'development') {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'r' || e.key === 'R') {
          this.resetSlides();
        }
      });
    }
  },
  beforeUnmount() {
    if (this.scrollTimeout) {
      clearTimeout(this.scrollTimeout);
    }
  }
}
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  main
    position: relative

  .slides-section
    position: relative
    height: 100vh
    overflow-y: auto
    scroll-behavior: smooth
    
    .scroll-spacer
      height: 400vh
      width: 1px

  .slide-wrapper
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    display: flex
    align-items: center
    justify-content: center
    pointer-events: none
    transform-origin: left
    // z-index: 10

  .final-slide
    height: 100vh
    display: flex
    align-items: center
    justify-content: center
    position: relative
</style>
