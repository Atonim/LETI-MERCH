<template>
  <div class="container">
    <Header color="rgba(42, 42, 42, 0.1)" position="absolute" />
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<style lang="scss">
@import "./assets/styles/styles.scss";
</style>
