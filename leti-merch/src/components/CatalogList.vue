<template>
  <div class="products-container">
    <div v-if="products.result" class="products">
      <Loader v-if="loading" />
      <Product
        v-else
        v-for="product in products.result"
        :product="product"
        :key="product.id"
      />
    </div>
    <div v-else class="products-empty">Ждите пополнение товаров</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import api from "@/api.js";
import Product from "@/components/Product.vue";
import Loader from "@/components/UI/Loader.vue";

const props = defineProps({
  category: {
    type: String,
    default: "3",
  },
});

const products = ref([]);
const loading = ref(true);

onMounted(async () => {
  products.value = await api.getProductsByCategory(props.category);
  console.log(products);
  loading.value = false;
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
  &-empty {
    margin: 25px 0;
    color: var(--white);
  }
  &-container {
    margin-bottom: 56px;
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