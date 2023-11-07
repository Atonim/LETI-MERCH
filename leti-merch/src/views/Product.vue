<template>
  <div class="product">
    <Loader v-if="loading" />
    <ProductDetail v-else :product="currentProduct" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductDetail from "@/components/ProductDetail.vue";
import Loader from "@/components/UI/Loader.vue";
import api from "@/api.js";

const route = useRoute();
const productId = ref("");
const currentProduct = ref({});
const loading = ref(true);

onMounted(async () => {
  productId.value = route.params.id;
  currentProduct.value = await api.getProductById(productId.value);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.product {
  flex: 1 0 auto;
  padding-top: 91px;
}
</style>