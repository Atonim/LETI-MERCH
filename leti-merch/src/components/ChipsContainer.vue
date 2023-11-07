<template>
  <div class="chips">
    <div class="chips-menu">
      <Chip
        class="catalog-menu__chip"
        v-for="(element, i) of menu"
        :key="i"
        :category="element.name"
        >{{ element.name }}</Chip
      >
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Loader from "@/components/UI/Loader.vue";
import Chip from "@/components/UI/Chip.vue";
import api from "@/api.js";

const loading = ref(true);
const menu = ref([]);

onMounted(async () => {
  menu.value = await api.getCategories();
  loading.value = false;
});
</script>
<style lang="scss" scoped>
.chips {
  color: var(--white);
  margin-bottom: 40px;
  &-menu {
    width: 100%;
    min-height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 0;
  }
}
</style>