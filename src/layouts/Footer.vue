<template>
  <a href="javascript:void(0)" class="footer_nav flex" @click="toggleMenu">
    <div class="link contact">Contact</div>
    <div v-show="isMenuVisible" class="contact-menu ">
      <a class="block" href="tel:+886-955876802">Phone</a>
      <a class="block" href="mailto:fys840802@gmail.com?subject=Looking forward to see you soon">Email</a>
      <a class="block" href="https://www.linkedin.com/in/fanyihsuan/">LinkedIn</a>
      <a class="block" href="https://www.behance.net/congee_88">Behance</a>
    </div>
  </a>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      isMenuVisible: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuVisible = !this.isMenuVisible;
    },
  },

};
</script>