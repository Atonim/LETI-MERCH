<template>
  <div class="about-us">
    <h1 class="about-us__title">О магазине ETU.SHOP</h1>
    <img src="/img/about-umbrella.png" alt="umbrella" class="about-us__img" />
    <div class="about-us__description">
      ETU.SHOP - это не просто магазин, в котором продается мерч первого
      электротехнического. Мы позволяем вам проникнуться особой атмосферой вуза
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.about-us {
  color: var(--white);
  &__title {
    font-family: var(--halvar);
    font-size: 72px;
    line-height: 79.2px;
  }
  &__img {
    max-width: 611px;
  }
  &__description {
    font-size: 24px;
    padding: 50px 0;
  }
}
</style>