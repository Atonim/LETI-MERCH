<template>
  <div class="chips">
    <div class="chips-menu">
      <Chip
        class="catalog-menu__chip"
        v-for="(element, i) of menu"
        :key="i"
        :category="element.name"
        :class="element.id === activeChip ? 'active' : ''"
        @click="toggleChip(element)"
        >{{ element.name }}</Chip
      >
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineEmits } from "vue";
import Loader from "@/components/UI/Loader.vue";
import Chip from "@/components/UI/Chip.vue";
import api from "@/api.js";

const emit = defineEmits(["create"]);
const loading = ref(true);
const menu = ref([]);
const activeChip = ref(0);

onMounted(async () => {
  menu.value = await api.getCategories();
  menu.value.unshift({ id: 0, name: "Все" });
  console.log(menu.value);
  loading.value = false;
});

const toggleChip = (element) => {
  activeChip.value = element.id;
  emit("create", activeChip.value);
};
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