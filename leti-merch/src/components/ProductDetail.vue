<template>
  <div class="product">
    <div class="product-image">
      <img :src="product.img" :alt="product.title" class="product-image__img" />
    </div>
    <div>
      <h2 class="product-name">{{ product.title }}</h2>
      <span class="product-price">{{ product.price }} ₽</span>
      <div class="product-block product-description">
        <span class="product-block__title"> Описание </span>
        <div v-html="product.description"></div>
      </div>
      <div class="product-block">
        <span class="product-block__title">Характеристики</span>
        <span
          class="product-param"
          v-for="(param, i) of product.params"
          :key="i"
          >{{ param.name }}: {{ param.value }}</span
        >
      </div>
      <div class="product-block">
        <span class="product-block__title">Количество</span>
        <div class="product-quantity">
          <span class="product-quantity-symbol" @click="changeQuantity('minus')"
            >-</span
          >
          <span class="product-quantity-value">{{ quantity }}</span>
          <span class="product-quantity-symbol" @click="changeQuantity('plus')"
            >+</span
          >
        </div>
      </div>
      <uiButton @click="cartStore.addToCart(product, quanity)"
        >Добавить в корзину</uiButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import uiButton from "@/components/UI/Button.vue";
import { useCartStore } from "@/store/cart.js";

const quantity = ref(1);
const cartStore = useCartStore();

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
    required: true,
  },
});

const changeQuantity = (type) => {
  if (type === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  }
  if (type === "plus") {
    quantity.value === 3 ? (quantity.value = 3) : quantity.value++;
  }
};
</script>

<style lang="scss" scoped>
.product {
  background: var(--white);
  padding: 50px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 65px;
  &-name {
    margin: 0 0 16px 0;
    font-family: var(--white);
    font-size: 48px;
  }
  &-price {
    display: block;
    font-size: 24px;
    margin-bottom: 28px;
  }
  &-block {
    margin-bottom: 40px;
    &__title {
      display: block;
      margin-bottom: 14px;
    }
  }
  &-description {
    border-top: 1px solid var(--black);
    padding-top: 24px;
  }
  &-param {
    display: block;
  }
  &-quantity {
    background: var(--white);
    width: 122px;
    height: 46px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border: 1px solid var(--black);
    &-symbol {
      color: var(--border-grey);
      cursor: pointer;
    }
  }
}
</style>