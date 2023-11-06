<template>
  <div class="products-container">
    <div class="products">
      <Product
        v-for="product of products"
        :key="product.id"
        :img="product.img"
        :title="product.title"
        :price="product.price"
      />
    </div>
    <a href="#" class="products-link">Каталог</a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Product from "@/components/Product.vue";

const products = ref([
  {
    id: 1,
    img: "/img/product1.jpg",
    title: "Футболка1 ЛЭТИ",
    price: 250,
  },
  {
    id: 2,
    img: "/img/product1.jpg",
    title: "Футболка2 ЛЭТИ",
    price: 255,
  },
  {
    id: 3,
    img: "/img/product1.jpg",
    title: "Футболка3 ЛЭТИ",
    price: 150,
  },
  {
    id: 4,
    img: "/img/product1.jpg",
    title: "Футболка4 ЛЭТИ",
    price: 240,
  },
]);
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  margin-bottom: 64px;
  padding: 0 80px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
  }
  &-container {
    margin-bottom: 56px;
  }
  &-link {
    display: block;
    text-align: center;
    color: var(--black);
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>