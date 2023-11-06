<template lang="">
  <div class="about-brand">
    <h3 class="about-brand__title">Почему мы такие классные</h3>
    <div class="about-brand-elements">
      <div 
      class="about-brand-element"
      v-for="(element, i) of aboutBrands"
      :key="i">
        <img :src="element.img" :alt="element.title" class="about-brand-element__img">
        <h4 class="about-brand-elemet__title">{{element.title}}</h4>
        <span class="about-brand-elemet__description">{{element.description}}</span>
      </div>
    </div>  
  </div>
</template>

<script setup>
import { ref } from "vue";
const aboutBrands = ref([
  {
    img: "/svg/header-top-search.svg",
    title: "У нас лучшие работники",
    description: "И лучшие печеньки",
  },
  {
    img: "/svg/header-top-search.svg",
    title: "У нас лучшие работники",
    description: "И лучшие печеньки",
  },
  {
    img: "/svg/header-top-search.svg",
    title: "У нас лучшие работники",
    description: "И лучшие печеньки",
  },
  {
    img: "/svg/header-top-search.svg",
    title: "У нас лучшие работники",
    description: "И лучшие печеньки",
  },
]);
</script>

<style lang="scss" scoped>
.about-brand {
  padding: 80px 0 130px 0;
  &__title {
    text-align: center;
    font-size: 24px;
    color: var(--black);
    margin: 0 0 84px 0;
  }
  &-elements {
    display: grid;
    grid-template-columns: repeat(4, 210px);
    justify-content: space-between;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
  }
  &-element {
    color: var(--black);
    background-color: lightcyan;
    padding: 15px;
    &__img {
      display: block;
      margin-bottom: 12px;
    }
    &__title {
      margin: 0 0 12px 0;

      font-size: 20px;
    }
    &__description {
      font-size: 16px;
      line-height: 1.5;
    }
  }
}
</style>