<template>
  <section>
    <h1>Fan YiH
      <a :href="resumeUrl" target="_blank">Resume</a>
    </h1>
    <h2>
      UI/ UX Designer |
    </h2>
    <h2>
      Front-End Developer |
    </h2>
    <h2>
      Design Developer
    </h2>
    <p>Hellooooo I'm a UI/UX designer and front-end developer from Taiwan, currently in London. I focus on blending
      design
      aesthetics with functional, user-centered code. I have experience in Vue and am now sharpening my skills in
      React, Tailwind, and animation with GSAP to create engaging, high-quality digital experiences.
    </p>
    <div>
      <h3>Work Experience</h3>
      <ul>
        <li>
          <h4>UX/UI Designer / Front-End Developer</h4>
          <small>NEUTEC Co., Ltd.</small>
          <span>Feb 2022 - Feb 2025</span>
        </li>
        <li>
          <h4>UI Designer</h4>
          <small>GOTRUST Co., Ltd.</small>
          <span>Apr 2021 - Feb 2022</span>
        </li>
        <li>
          <h4>Web Designer</h4>
          <small>CBES Co., Ltd.</small>
          <span>Feb 2019 - Mar 2021</span>
        </li>
        <li>
          <h4>Art Teacher</h4>
          <small>Global ART Co., Ltd.</small>
          <span>Sep 2017 - Feb 2018</span>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import profileImage from '@/public/main.webp';
const resumeUrl = new URL('@/public/files/resume.pdf', import.meta.url).href;

export default {
  name: 'About',
  data() {
    return {
      resumeUrl,
      profileImage,
    };
  },
};
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *
  
  section
    padding: calc($base8 * 16) $base8
    max-width: 1200px
    margin: 0 auto
    color: $dark-clr
    background-attachment: scroll
    &::before
      content:''
      position: absolute
      top: 80px
      left: 0
      width: 100%
      height: 40vh
      background-image: url("/public/profolio.gif")
      background-position: -230px center
      z-index: -1
    > small
      font-size: $base8
      opacity: 0.2
  div, p, h3, ul
    margin: $base8 0 $base
  h1
    font-size:  calc($base8 * 3)
    margin: $base2 0
    line-height: normal
  h2
    font-size:  $base8
    display: inline-block
    padding: $base
  h4
    display: block
    font-size:  $base5
    font-weight: normal
    margin: $base2 0
  a
      @include button($dark-clr, $light-clr, $dark-clr, $light-clr)
      margin: calc($base * 1.5) 0
      vertical-align: middle
  span
    margin-left: $base4
    &::before
      content: ''
      position: relative
      display: inline-block
      vertical-align: middle
      margin-right: $base2
      width: 4px
      height: 4px
      background-color: $dark-clr
      border-radius: $borderRadius
  
  small,
  span
    opacity: 0.4
    font-size: $base4
</style>
