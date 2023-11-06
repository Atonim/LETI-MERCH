<template>
  <div>
    <Hero />
    <AboutBrand />
    <Loader v-if="loading" />
    <Products v-else :products="popularProducts" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Hero from "@/components/Hero.vue";
import AboutBrand from "@/components/AboutBrand.vue";
import Products from "@/components/Products4Column.vue";
import Loader from "@/components/UI/Loader.vue";
import api from "@/api.js";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(() => {
  popularProducts.value = api.getPopularProducts();
  loading.value = false;
});
</script>



<style lang="scss">
</style>
