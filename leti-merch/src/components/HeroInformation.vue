<template>
  <div class="hero-info">
    <div class="hero-info-text">
      <h2 class="hero-info__title">{{ title }}</h2>
      <span class="hero-info__description">{{ description }}</span>
    </div>
    <uiButton>Узнать подробнее</uiButton>
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
  description: {
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
    background: #fff;
    max-width: 630px;
    padding: 50px 55px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    &-link {
      color: var(--black);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>