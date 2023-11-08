<template>
  <div class="product">
    <div class="product-image">
      <img
        :src="product.images[0]"
        :alt="product.name"
        class="product-image__img"
      />
    </div>
    <div class="product-description">
      <h2 class="product-name">{{ product.name }}</h2>
      <span class="product-price">{{ activePrice }} ₽</span>
      <div class="product-block">
        <div>{{ product.description }}</div>
      </div>
      <div class="product-size">
        <span class="product-size__title">Выберите размер</span>
        <div class="product-size-grid">
          <div
            class="product-size-grid__item"
            v-for="el in product.types"
            :key="el.id"
            :class="el.name === activeSize ? 'active' : ''"
            @click="changeSize(el.id)"
          >
            {{ el.name }}
          </div>
        </div>

        <!--<span class="product-block__title">Характеристики</span>
        <span
          class="product-param"
          v-for="(param, i) of product.params"
          :key="i"
          >{{ param.name }}: {{ param.value }}</span
        >-->
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
      <uiButton @click="cartStore.addToCart(productForCart, quantity)"
        >Добавить в корзину</uiButton
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import uiButton from "@/components/UI/Button.vue";
import { useCartStore } from "@/store/cart.js";
import api from "@/api.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

console.log(props.product);

const activeSize = ref(props.product.types[0].name);
const activePrice = ref(props.product.types[0].price);
const quantity = ref(1);
const cartStore = useCartStore();

const arrayMin = (arr) => {
  return arr.reduce(function (p, v) {
    return p.price > v.price ? p.price : v.price;
  });
};

const minPrice = (arr) => {
  let minim = arr[0].price;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].price < minim) minim = arr[i].price;
  }
  return minim;
};

console.log(minPrice(props.product.types));

const productForCart = ref({
  name: props.product.name,
  price: activePrice,
  avatar: props.product.images[0],
});

const changeQuantity = (type) => {
  if (type === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  }
  if (type === "plus") {
    quantity.value === 99 ? (quantity.value = 99) : quantity.value++;
  }
};

const changeSize = (id) => {
  const active = props.product.types.find((el) => el.id === id);
  console.log(active);
  activeSize.value = active.name;
  activePrice.value = active.price;
};
</script>

<style lang="scss" scoped>
.product {
  background: var(--block);
  padding: 50px 152px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 65px;
  color: var(--white);
  &-image {
    &__img {
      border-radius: 10px;
    }
  }
  &-size {
    &__title {
      font-size: 16px;
    }
    &-grid {
      display: flex;
      justify-content: flex;
      align-items: center;
      margin: 10px 0;
      gap: 5px;
      max-width: 610px;
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--white);
        border-radius: 4px;
        padding: 5px 15px;
        width: 80px;
        height: 50px;
        &:hover {
          border: 1px solid var(--black);
          background: var(--white);
          color: var(--black);
        }
      }
    }
  }
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
    margin: 20px 0;
    &__title {
      font-size: 16px;
    }
  }
  &-description {
    border-top: 1px solid var(--black);
  }
  &-param {
    display: block;
  }
  &-quantity {
    height: 50px;
    width: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 0 16px;
    border: 1px solid var(--white);
    border-radius: 4px;
    &-symbol {
      color: var(--border-grey);
      cursor: pointer;
    }
  }
  .active {
    border: 1px solid var(--black);
    background: var(--white);
    color: var(--black);
  }
}
</style>