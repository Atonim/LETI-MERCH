<template>
  <div class="catalog">
    <h2 class="catalog-title">Каталог товаров</h2>
    <ChipsContainer @create="changeCatalog" />
    <CatalogList :category="categoryId" :key="categoryId" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import ChipsContainer from "@/components/ChipsContainer.vue";
import CatalogList from "@/components/CatalogList.vue";

const categoryId = ref(1);
const changeCatalog = (id) => (categoryId.value = id);
</script>

<style lang="scss" scoped>
.catalog {
  flex: 1 0 auto;
  padding: 91px 152px 0 152px;
  &-title {
    font-size: 72px;
    color: var(--white);
    margin-bottom: 15px;
  }
}
</style>