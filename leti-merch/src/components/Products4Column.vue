<template>
  <div class="products-container">
    <h3 class="products-title">Популярные товары</h3>
    <div class="products">
      <Product
        v-for="product of products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
        :id="product.id"
      />
    </div>
    <a href="#" class="products-link">Каталог</a>
  </div>
</template>

<script setup>
import Product from "@/components/Product.vue";

import api from "@/api.js";

const props = defineProps({
  products: {
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 64px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
  }
  &-container {
    margin-bottom: 56px;
    padding: 0 152px;
  }
  &-title {
    color: var(--white);
    font-family: var(--halvar);
    font-size: 48px;
    text-align: center;
  }
  &-link {
    display: block;
    text-align: center;
    color: var(--white);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>