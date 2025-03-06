<template>
  <div class="wrapper">
    <div class="project">
      <img :src="profileImage" alt="Profile Image">
      <h1>Fan YiHsuan</h1>
      <h2>
        UI/ UX Designer | Front-End Developer |
      </h2>
      <h2>
        Graphic Designer
      </h2>
      <a :href="resumeUrl" class="button" download="resume.pdf">Resume</a>
    </div>
    <div class="project">
      <div class="project-content">
        <p>With 4+ years of UI/ UX design experience and 3 years in commercial design, I specialize in user experience
          optimization, design system development, and front-end collaboration. I excel at executing projects
          independently while thriving in team environments to enhance product quality.</p>
      </div>
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
            <div class="job-title">UI Designer</div>
            <small class="company">NEUTEC Co., Ltd.</small>
            <span class="duration">Feb 2022 - Feb 2025</span>
          </li>
          <li>
            <div class="job-title">UI Designer</div>
            <small class="company">GOTRUST Co., Ltd.</small>
            <span class="duration">Apr 2021 - Feb 2022</span>
          </li>
          <li>
            <div class="job-title">Web Designer</div>
            <small class="company">CBES Co., Ltd.</small>
            <span class="duration">Feb 2019 - Mar 2021</span>
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
import profileImage from '@/assets/main.png';
import googleCertificate from '@/assets/googleCertificate.webp';
const resumeUrl = new URL('@/assets/resume.pdf', import.meta.url).href;

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
