<template>
  <section>
    <div>
      <img :src="profileImage" alt="Profile Image">
      <div>
        <h1>Fan YiH</h1>
        <h2>
          UI/ UX Designer |
        </h2>
        <h2>
          Front-End Developer |
        </h2>
        <h2>
          Design Developer |
        </h2>
        <a :href="resumeUrl" download="resume.pdf">Resume</a>
      </div>
    </div>
    <div class="project">
      <p>Hello this is Fan ,with 7 years of UI/UX design experience, I specialize in user experience optimization,
        design system development, and front-end collaboration. I am passionate about creating intuitive, user-centered
        designs that seamlessly combine functionality and aesthetics. I excel at executing projects
        independently while thriving in team environments to enhance product quality.
      </p>
      <div class="project-content">
        <h3>Skills</h3>
        <ul>
          <li>UI/UX Design</li>
          <li>HTML / Vue / React / JavaScript</li>
          <li>Responsive Web Design</li>
          <li>Design System Development</li>
        </ul>
      </div>

      <div class="project-content">
        <h3>Tools</h3>
        <ul>
          <li>Figma</li>
          <li>Jira / GitHub</li>
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
  </section>
</template>

<script>
import profileImage from '@/public/main.webp';
import googleCertificate from '@/public/googleCertificate.webp';
const resumeUrl = new URL('@/public/files/resume.pdf', import.meta.url).href;

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
  // section
  //   padding: $base4
  img
    border-radius: calc($borderRadius * 100)
    @include imgDefault(cover)
    width: 120px
    ~ div
      display: inline-block
      vertical-align: bottom
      margin-left: $base2
  // ul, span
  //   display: block
  h1
      font-size: $base6
      margin: $base2 0
      line-height: normal
  h2
      @include infoSpan
      display: inline-block
      font-weight: normal
      line-height: normal
      margin: $base 0
      white-space: break-spaces
      font-style: italic
      font-size: $base3
      opacity: 0.5
      
  h3
      font-size: 20px
      margin: $base2 0 $base3 0
      padding: $base2 0
      border-bottom: .5px solid rgba($dark-clr ,0.5 )
  a
      @include button($dark-clr, $light-clr, $dark-clr, $light-clr)
      display: block
      width: fit-content
      margin: calc($base * 1.5) 0

  // span
  //   font-size: 12px
  ul li::before
            content: ""
            display: inline-block
            width: $base
            height: $base
            background-color: $grey-clr
            vertical-align: middle
            margin-right: $base
            border-radius: $base
            position: absolute
            left: -14px
            top: 12px
  @media (min-width: 1000px)
    section
      display: flex
      > div
        margin-top: $base4
    h1
      font-size: $base8
    h2
      display: block
    a
      margin-top: $base3
</style>
