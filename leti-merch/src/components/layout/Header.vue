<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/header-top-search.svg" alt="search" />
      </div>

      <router-link to="/" class="header-logo">LETI Merch</router-link>
      <div class="header-top-right">
        <div class="header-top-right__cart">
          <router-link to="/cart">
            <img src="/svg/header-top-search.svg" alt="search" />
          </router-link>
        </div>
        <div class="header-top-right__profile">
          <router-link to="/user">
            <img src="/svg/header-top-search.svg" alt="user" />
          </router-link>
        </div>
      </div>
    </div>
    <div class="header-menu">
      <router-link
        class="header-menu__link"
        v-for="(element, i) of menu"
        :to="element.path"
        :key="i"
        >{{ element.name }}</router-link
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menu = [
  {
    name: "Каталог",
    path: "/catalog",
  },
  {
    name: "Лукбук",
    path: "/lookbook",
  },
  {
    name: "О бренде",
    path: "/about",
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
      color: var(--gray);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>