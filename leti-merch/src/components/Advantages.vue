<template lang="">
  <div class="about-brand">
    <h2 class="about-brand__title">Наши преимущества</h2>
    <div class="about-brand-elements">
      <div 
      class="about-brand-element"
      v-for="(element, i) of aboutBrands"
      :key="i">
        <div class="about-brand-element-top">
          <h4 class="about-brand-element__title">{{element.title}}</h4>
          <div v-if="element.content === 'top'" class="about-brand-element-top__svg">
            <img :src="element.src" :alt="element.content"/>
          </div>
        </div>
        <div class="about-brand-element-bottom">
          <span class="about-brand-element__description">{{element.description}}</span>
          <div v-if="element.content === 'bottom'" class="about-brand-element-bottom__svg">
            <img :src="element.src" :alt="element.content"/>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup>
import { ref } from "vue";
const aboutBrands = ref([
  {
    title: "Качество",
    description:
      "Вся наша продукция имеет высокое качество, мы сами не понимаем, как у так получается, но факт остается",
    content: "top",
    src: "/svg/magic-stick.svg",
  },
  {
    title: "Доступность",
    description: "Наша продукция имеет максимально выгодную цену",
    content: "top",
    src: "/svg/sphere.svg",
  },
  {
    title: "Студенто-ориентированность",
    description: "Все товары созданы специально для студентов вуза",
    content: "bottom",
    src: "/svg/university.svg",
  },
]);
</script>

<style lang="scss" scoped>
.about-brand {
  padding: 80px 0 130px 0;

  &__title {
    text-align: center;
    font-family: var(--halvar);
    font-size: 48px;
    line-height: 52.8px;
    color: var(--white);
    margin: 0 0 84px 0;
    font-weight: 700;
  }
  &-elements {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: 25px;
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 40px 20px;
    }
  }
  &-element {
    color: var(--white);
    background-color: var(--dark);
    border-radius: 8px;
    height: 216px;
    width: 100%;
    display: grid;
    flex-direction: column;
    &-top {
      display: grid;
      grid-template-columns: auto max-content;
      &__svg {
        align-self: start;
      }
    }
    &-bottom {
      display: grid;
      grid-template-columns: auto max-content;
      &__svg {
        align-self: end;
      }
    }
    &__img {
      display: block;
      margin-bottom: 12px;
    }
    &__title {
      margin: 0 0 12px 0;
      font-weight: 700;
      font-size: 24px;
      padding: 15px;
    }
    &__description {
      font-size: 18px;
      line-height: 1.5;
      align-self: end;
      padding: 15px;
    }
  }
}
</style>