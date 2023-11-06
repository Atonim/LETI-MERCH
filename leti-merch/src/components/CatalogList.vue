<template>
  <div class="products-container">
    <div class="products">
      <Product
        v-for="product in api.getCatalog()"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import api from "@/api.js";
import Product from "@/components/Product.vue";
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