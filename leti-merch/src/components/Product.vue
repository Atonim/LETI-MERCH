<template>
  <div class="product">
    <router-link :to="`product/${product.id}`">
      <img :src="product.img" :alt="product.title" class="product-img" />
    </router-link>
    <div class="product-description">
      <router-link :to="`product/${product.id}`" class="product-name">{{
        title
      }}</router-link>
      <div class="product-description-bottom">
        <uiButton
          @click="cartStore.addToCart(product, 1)"
          backgroundColor="var(--black)"
          textColor="var(--white)"
          border="1px solid var(--white)"
          borderRadius="4px"
          fontSize="12px"
          height="39px"
          >Добавить в корзину</uiButton
        >
        <span class="product-price">{{ product.price }} ₽</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import uiButton from "@/components/UI/Button.vue";
import { useCartStore } from "@/store/cart.js";

const props = defineProps({
  product: {
    type: Object,
    default: () => {},
    required: true,
  },
});

const cartStore = useCartStore();
</script>

<style lang="scss" scoped>
.product {
  font-family: var(--halvar);
  &-img {
    display: block;
    max-height: 436px;
  }
  &-name {
    display: block;
    color: var(--white);
    font-family: var(--halvar);
    font-size: 24px;
    line-height: 26.4px;
    margin-bottom: 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &-price {
    display: block;
    font-size: 18px;
    color: var(--white);
  }
  &-description {
    padding: 0 22px;
    &-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>