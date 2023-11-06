<template>
  <div class="catalog">
    <h2 class="catalog-title">Каталог товаров</h2>
    <div class="catalog-menu">
      <Chip class="catalog-menu__chip" v-for="(element, i) of menu" :key="i">{{
        element.name
      }}</Chip>
    </div>
  </div>
</template>

<script setup>
import Chip from "@/components/UI/Chip.vue";
const menu = [
  {
    name: "Свитшоты",
  },
  {
    name: "Худи",
  },
  {
    name: "Футболки",
  },
  {
    name: "Канцелярия",
  },
  {
    name: "Кружки",
  },
  {
    name: "Аксессуары",
  },
];
</script>

<style lang="scss" scoped>
.catalog {
  padding-top: 91px;
  &-title {
    font-size: 72px;
    color: var(--black);
  }
  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>