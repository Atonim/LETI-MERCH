<template>
  <div class="about">
    <div class="about-description">
      <h3 class="about-description__title">О нас</h3>
      <p class="about-description__text">
        ETU.SHOP - это не просто магазин, в котором продается мерч первого
        электротехнического. Мы позволяем вам проникнуться особой атмосферой
        вуза
      </p>
      <p class="about-description__text">
        “ЛЭТИ” - больше, чем вуз или 4 буквы, это определяющая часть жизни
        каждого вступившего в его стены
      </p>
    </div>
    <div class="about-image">
      <img class="about-image" src="/img/about-etu.png" alt="about-etu" />
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" cover>
.about {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 65px;
  padding: 140px 152px;
  &-description {
    color: var(--white);
    &__title {
      font-size: 48px;
      font-family: var(--halvar);
      margin: 0 0 30px 0;
    }
    &__text {
      font-size: 24px;
      font-family: var(--halvar);
    }
  }
}
</style>