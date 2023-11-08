<template>
  <div class="products-container">
    <Loader v-if="loading" />
    <div v-else>
      <div v-if="products[0]" class="products">
        <Product
          v-for="product in products"
          :product="product"
          :key="product.id"
        />
      </div>
      <h3 v-else class="products-empty">Ждите пополнения ассортимента!</h3>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, onMounted, ref, watch } from "vue";
import { useSearchStore } from "@/store/searchStore.js";
import api from "@/api.js";
import Product from "@/components/Product.vue";
import Loader from "@/components/UI/Loader.vue";

const props = defineProps({
  category: {
    type: Number,
    required: true,
  },
});

const searchStore = useSearchStore();
const { searchQuery } = storeToRefs(searchStore);
const products = ref([]);
const selectedProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  selectedProducts.value = await api.getProductsByCategory(props.category);
  products.value = selectedProducts.value;
  if (searchQuery.value) {
    products.value = products.value.filter((el) =>
      el.name.includes(searchQuery.value)
    );
  }

  loading.value = false;
});

watch(
  searchQuery,
  (state) => {
    if (!searchQuery.value) {
      products.value = selectedProducts.value;
    }
    console.log(JSON.stringify(state));
    products.value = products.value.filter((el) =>
      el.name.includes(searchQuery.value)
    );
  },
  { deep: true }
);
//async search () => {
//  products.value = await api.apiProduct()
//}

//watch(searchStore.searchQuery, (state) => {
//  console.log(searchStore.searchQuery);
//  searchQuery.value = searchStore.searchQuery;
//  console.log(searchQuery.value);
//});
</script>

<style lang="scss" scoped>
.products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
  }
  &-container {
    min-height: 100px;
    margin-bottom: 64px;
  }
  &-empty {
    margin: 25px 0;
    color: var(--white);
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