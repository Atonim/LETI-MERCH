<template >
  <div class="list">
    <h2 class="list-title">Корзина</h2>
    <div class="list-container" v-if="cartStore.cart.length">
      <div class="list-item" v-for="el in cartStore.cart" :key="el.id">
        <div class="list-item-container">
          <img :src="el.img" :alt="el.title" class="list-item__img" />
        </div>
        <div class="list-item-name">{{ el.title }}</div>
        <div class="list-item-quantity">{{ el.quanity }}</div>
        <span>X</span>
        <div class="list-item-price">{{ el.price }} ₽</div>
        <div class="list-item-total"></div>
      </div>
    </div>
    <h3 v-else class="list-empty">Пока что пусто</h3>
  </div>
</template>
<script setup>
import { useCartStore } from "@/store/cart.js";

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.list {
  padding: 91px 152px 0 152px;
  color: var(--white);
  &-empty {
    text-align: center;
    margin: 50px;
  }
  &-title {
    color: var(--white);
    font-family: var(--halvar);
    font-size: 48px;
    text-align: center;
  }
  &-item {
    display: grid;
    grid-template-columns: 1fr 1fr 100px 30px 100px 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    &__img {
      max-width: 300px;
    }
  }
}
</style>