<template>
  <Header />
  <Footer />
  <router-view /> <!-- 根據當前路由顯示不同的組件 -->
</template>

<script>
import Header from './layouts/Header.vue'; // 引入 Header 組件
import Footer from './components/Footer.vue'; // 引入 Footer 組件

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
};
</script>
