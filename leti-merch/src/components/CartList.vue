<template >
  <div class="list">
    <div class="list-title-container">
      <h2 class="list-title">Корзина</h2>
      <span class="list-title__count" v-if="cartStore.cart.length"
        >({{ cartStore.cart.length }})</span
      >
    </div>

    <div class="list-container" v-if="cartStore.cart.length">
      <div class="list-item" v-for="el in cartStore.cart" :key="el.id">
        <router-link class="list-item-container" :to="`product/${el.id}`">
          <img :src="el.avatar" :alt="el.name" class="list-item__img" />
        </router-link>
        <div class="list-item-name">{{ el.name }}</div>
        <div class="list-item-size">Размер: {{ el.type.toUpperCase() }}</div>
        <div class="list-item-quantity">
          {{ el.quantity }} X {{ el.price }} ₽
        </div>
        <div class="list-item-total">
          {{ totalPrice(el.price, el.quantity) }} ₽
        </div>
        <uiButton @click="cartStore.removeFromCart(el)">Удалить</uiButton>
      </div>
      <div class="list-purchase">
        <uiButton @click="cartStore.purchase()">Подвердить</uiButton>
      </div>
    </div>
    <h3 v-else class="list-empty">Пока что пусто</h3>
  </div>
</template>
<script setup>
import { useCartStore } from "@/store/cart.js";
import { computed } from "vue";
import uiButton from "@/components/UI/Button.vue";

const totalPrice = (price, quantity) => price * quantity;
const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.list {
  color: var(--white);
  &-empty {
    text-align: center;
    margin: 50px;
  }
  &-purchase {
    display: flex;
    justify-content: flex-end;
    margin: 50px 0;
  }
  &-title {
    color: var(--white);
    font-family: var(--halvar);
    font-size: 48px;
    margin: 0;
    display: inline-block;
    &-container {
      position: relative;
      margin: 50px 0 15px 0;
    }
    &__count {
      position: absolute;
      width: 10px;
      height: 10px;
      margin-left: 2px;
      font-size: 24px;
      text-decoration: none;
    }
  }
  &-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    border: 1px solid var(--white);
    margin-bottom: 15px;
    &__img {
      max-width: 200px;
    }
  }
}
</style>