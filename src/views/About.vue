<template>
  <div class="wrapper">
    <div>
      <img :src="profileImage" alt="Profile Image">
      <h1>Fan YiHsuan</h1>
      <h2>
        UI/ UX Designer |
        Front-End Developer |
        Graphic Designer
      </h2>
      <a :href="resumeUrl" download="resume.pdf">Resume</a>
    </div>
    <div class="project">
      <p>With 4+ years of UI/UX design experience and 3 years in commercial design, I specialize in user experience
        optimization, design system development, and front-end collaboration. I am passionate about creating intuitive,
        user-centered designs that seamlessly combine functionality and aesthetics. I excel at executing projects
        independently while thriving in team environments to enhance product quality.
        <br>
        <br>
        My expertise includes using tools like Figma and Adobe XD, as well as front-end technologies such as HTML, Vue,
        and JavaScript to bring
        designs to life. I take pride in optimizing user flows and creating consistent, scalable design systems that
        ensure long-term product success. Throughout my career, I have successfully led and contributed to several
        projects that improved user engagement and streamlined complex interfaces.
      </p>
      <div class="project-content">
        <h3>Skills</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>HTML / CSS / JavaScript / Vue</li>
          <li>Responsive Web Design (RWD)</li>
          <li>Wireframing & Prototyping</li>
          <li>Design System Development</li>
        </ul>
      </div>

      <div class="project-content">
        <h3>Tools</h3>
        <ul>
          <li>VS Code</li>
          <li>Figma / Sketch / Adobe XD</li>
          <li>Jira</li>
          <li>Illustrator / Photoshop</li>
        </ul>
      </div>

      <div class="project-content">
        <h3>Work Experience</h3>
        <ul>
          <li>
            <div>UI Designer</div>
            <small>NEUTEC Co., Ltd.</small>
            <span>Feb 2022 - Feb 2025</span>
          </li>
          <li>
            <div>UI Designer</div>
            <small>GOTRUST Co., Ltd.</small>
            <span>Apr 2021 - Feb 2022</span>
          </li>
          <li>
            <div>Web Designer</div>
            <small>CBES Co., Ltd.</small>
            <span>Feb 2019 - Mar 2021</span>
          </li>
          <li>
            <div>Art Teacher</div>
            <small>Global ART Co., Ltd.</small>
            <span>Sep 2017 - Feb 2018</span>
          </li>
        </ul>
      </div>
      <div class="project-content">
        <h3>Languages</h3>
        <ul>
          <li>English</li>
          <li>Mandarin</li>
        </ul>
      </div>

      <div class="project-content">
        <h3>Certifications</h3>
        <img :src="googleCertificate" alt="Google UX Design Certificate">
      </div>
    </div>
  </div>
</template>

<script>
import profileImage from '@/assets//images/main.png';
import googleCertificate from '@/assets//images/googleCertificate.webp';
const resumeUrl = new URL('@/assets/files/resume.pdf', import.meta.url).href;

export default {
  name: 'About',
  data() {
    return {
      resumeUrl,
      profileImage,
      googleCertificate,
    };
  },
};
</script>

<style lang="sass" scoped>
  @use '@/assets/styles/_mixins.sass' as *
  @use '@/assets/styles/_variables.sass' as *

  img
    width: 100%
    border-radius: $borderRadius 
    @include imgDefault(cover)
    
  ul, span
    display: block
  h1
      font-size: 32px
      margin: calc( $base * 5) 0 calc( $base * 2 ) 0
  h2
      @include infoSpan
      font-weight: normal
      line-height: calc( $base * 6 )
      margin: calc( $base * 1.5 ) 0 calc( $base * 2.5 ) 0
      white-space: break-spaces
      font-style: italic
      width: 80%
  h3
      font-size: 20px
      margin: calc( $base * 2 ) 0 calc( $base * 3 ) 0
      padding: calc( $base * 2 ) 0
      border-bottom: .5px solid rgba($dark-clr ,0.5 )
  a
      @include button($dark-clr, $light-clr, $dark-clr, $light-clr)
  @media (min-width: 500px)
    .project
      padding-left: 280px
    .wrapper
      > div
        &:first-of-type           
          position: absolute
          top: 40px
          left: 20px
          z-index: 3
          pointer-events: none
          img
            max-width: 240px
        a
          pointer-events: auto
</style>
