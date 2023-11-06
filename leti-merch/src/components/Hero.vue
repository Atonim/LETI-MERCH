<template>
  <div class="hero">
    <HeroInformation title="Первый эстетический" link="/about" />
  </div>
</template>

<script setup>
import HeroInformation from "@/components/HeroInformation.vue";
</script>

<style lang="scss" scoped>
.hero {
  background: url("/img/hero.png");
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: auto;
}
</style>