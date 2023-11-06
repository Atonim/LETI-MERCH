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

onMounted(() => {
  productId.value = route.params.id;
  currentProduct.value = api.getProduct(productId.value);
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.product {
  padding-top: 91px;
}
</style>