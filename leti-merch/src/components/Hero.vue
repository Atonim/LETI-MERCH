<template>
  <div class="hero">
    <HeroInformation
      title="Самый красивый макет"
      description="В натуре четко"
      link="#"
    />
  </div>
</template>

<script setup>
import HeroInformation from "@/components/HeroInformation.vue";
</script>

<style lang="scss" scoped>
.hero {
  background: url("/img/hero.png");
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
}
</style>