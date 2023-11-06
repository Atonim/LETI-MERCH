<template>
  <div class="main">
    <Hero />
    <Loader v-if="loading" />
    <Products v-else :products="popularProducts" />
    <About />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Hero from "@/components/Hero.vue";
import Products from "@/components/Products4Column.vue";
import Loader from "@/components/UI/Loader.vue";
import About from "@/components/About.vue";
import api from "@/api.js";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(() => {
  popularProducts.value = api.getPopularProducts();
  loading.value = false;
});
</script>



<style lang="scss">
.main {
  flex: 1 0 auto;
}
</style>
