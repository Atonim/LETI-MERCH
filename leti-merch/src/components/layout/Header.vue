<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/header-top-search.svg" alt="search" />
      </div>

      <a href="#" class="header-logo">LETI Merch</a>
      <div class="header-top-right">
        <div class="header-top-right__cart">
          <a href="#">
            <img src="/svg/header-top-search.svg" alt="search" />
          </a>
        </div>
        <div class="header-top-right__profile">
          <a href="#">
            <img src="/svg/header-top-search.svg" alt="search" />
          </a>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <a
        class="header-menu__link"
        v-for="(element, i) of menu"
        :href="element.path"
        :key="i"
        >{{ element.name }}</a
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menu = [
  {
    name: "Plant pots",
    path: "/plant",
  },
  {
    name: "Ceramic",
    path: "/ceramic",
  },
  {
    name: "Tables",
    path: "/tables",
  },
];
</script>

<style lang="scss" scoped>
.header {
  height: 132px; //задаем фикс высоту
  background-color: white;
  &-top {
    display: flex;
    justify-content: space-between;
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;
    &-right {
      display: flex;
      align-items: center;
      &__cart {
        margin-right: 16px;
      }
    }
  }
  &-logo {
    color: #22202e;
    font-size: 24px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &-menu {
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin: 0 22px;
      color: #726e8d;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>