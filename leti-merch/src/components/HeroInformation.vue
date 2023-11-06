<template>
  <div class="hero-info">
    <div class="hero-info-text">
      <h2 class="hero-info__title">{{ title }}</h2>
    </div>
    <uiButton href="link">Подробнее</uiButton>
    <!--<a :href="link" class="hero-info-link">Узнать подробнее</a>-->
  </div>
</template>


<script setup>
import uiButton from "@/components/UI/Button.vue";
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  link: {
    type: String,
    required: false,
  },
});
</script>


<style lang="scss" scoped>
.hero {
  &-info {
    background: transparent;
    max-width: 575px;
    //padding: 50px 55px;
    height: 244px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 152px;
    gap: 60px;
    &-link {
      color: var(--white);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    &__title {
      font-size: 72px;
      color: var(--white);
      font-family: var(--halvar);
      line-height: 64.8px;
      font-weight: 700;
    }
  }
}
</style>