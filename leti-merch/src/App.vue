<script setup>
import Header from "./components/layout/Header.vue";
import Hero from "./components/Hero.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Hero />
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.cdnfonts.com/css/satoshi");
* {
  box-sizing: border-box;
}
body {
  font-family: "Satoshi", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

img {
  max-width: 100%;
}
.container {
  max-width: 1440px;
  margin: auto;
}
</style>
