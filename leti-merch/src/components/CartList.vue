<template >
  <div class="list">
    <h2 class="list-title">Корзина</h2>
    <div class="list-container" v-if="cartStore.cart.length">
      <div class="list-item" v-for="el in cartStore.cart" :key="el.id">
        <div class="list-item-container">
          <img :src="el.avatar" :alt="el.name" class="list-item__img" />
        </div>
        <div class="list-item-name">{{ el.name }}</div>
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
  padding: 91px 152px 0 152px;
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
  }
  &-item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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