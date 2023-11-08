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
import Products from "@/components/PopularProducts.vue";
import Loader from "@/components/UI/Loader.vue";
import About from "@/components/AboutMain.vue";
import api from "@/api.js";

const popularProducts = ref([]);
const loading = ref(true);

onMounted(async () => {
  popularProducts.value = await api.getProducts();
  loading.value = false;
});
</script>



<style lang="scss" scoped>
.main {
  flex: 1 0 auto;
  //padding: 91px 152px 0 152px;
}
</style>
