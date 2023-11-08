<template>
  <div class="about-us">
    <div class="about-us-top">
      <div class="about-us-left">
        <h1 class="about-us__title">О магазине ETU.SHOP</h1>
        <div class="about-us__description">
          ETU.SHOP - это не просто магазин, в котором продается мерч первого
          электротехнического. Мы позволяем вам проникнуться особой атмосферой
          вуза
        </div>
        <router-link class="about-us-link" to="/catalog">
          <span class="about-us-link__text">Перейти в Каталог</span
          ><img
            src="/svg/arrow-bottom-right.svg"
            alt=""
            class="about-us-link__svg"
          />
        </router-link>
      </div>
      <div class="about-us-right">
        <div class="about-us-image">
          <img
            src="/img/about-umbrella.png"
            alt="umbrella"
            class="about-us-image__img"
          />
          <div class="square"></div>
          <div class="stick"></div>
        </div>
      </div>
    </div>
    <div class="about-us-bottom">
      <Advantages />
    </div>
  </div>
</template>

<script setup>
import Advantages from "@/components/Advantages.vue";
</script>

<style lang="scss" scoped>
.about-us {
  color: var(--white);
  margin: 50px 0;
  &-top {
    display: grid;
    grid-template-columns: 600px 1fr;
    column-gap: 65px;
  }
  &__title {
    position: relative;
    font-family: var(--halvar);
    font-size: 72px;
    line-height: 79.2px;
    height: 72px;
    margin: 0;
    white-space: nowrap;
    z-index: 5;
  }
  &-image {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    &__img {
      max-width: 611px;
    }
  }

  &__description {
    font-size: 24px;
    padding: 50px 0;
  }
  &-link {
    font-size: 24px;
    color: var(--white);
    text-decoration: none;
    &__text {
      padding: 10px 10px 10px 0;

      &:hover {
        text-decoration: underline;
      }
      &::first-letter {
        color: red;
        font-size: 130%;
      }
    }
  }
}
.square {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 220px;
  height: 125px;
  background: var(--black);
}
.stick {
  z-index: 3;
  position: absolute;
  top: 0;
  left: 210px;
  width: 10px;
  height: 100%;
  background: var(--black);
}
</style>