<template>
  <div class="products-container">
    <h2 class="products-title">Популярные товары</h2>
    <div class="products">
      <Product
        v-for="product of products.result.slice(0, 4)"
        :product="product"
        :key="product.id"
      />
    </div>
  </div>
</template>

<script setup>
import Product from "@/components/Product.vue";

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
    font-stretch: expanded;
    line-height: 52.8px;
  }
}
</style>