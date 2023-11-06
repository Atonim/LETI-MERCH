<template>
  <header class="header">
    <div class="header-top">
      <div class="header-top-search">
        <img src="/svg/header-top-logo.svg" alt="search" />
      </div>

      <router-link to="/" class="header-logo">LETI Merch</router-link>
      <div class="header-top-right">
        <div class="header-top-right__cart">
          <router-link to="/cart" class="header-top-right__link">
            Корзина
          </router-link>
          <span class="header-top-right__count" v-if="cartStore.cart.length"
            >({{ cartStore.cart.length }})</span
          >
        </div>
        <div class="header-top-right__profile">
          <router-link to="/user" class="header-top-right__link">
            Личный кабинет
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
import { useCartStore } from "@/store/cart.js";

const cartStore = useCartStore();
const menu = [
  {
    name: "Каталог",
    path: "/catalog",
  },
  {
    name: "О нас",
    path: "/about",
  },
  {
    name: "Контакты",
    path: "/about",
  },
];
</script>

<style lang="scss" scoped>
.header {
  height: 132px; //задаем фикс высоту
  background-color: var(--white);
  &-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 70px;
    align-items: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0 28px;
    &-right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 10px;
      &__cart {
        margin-right: 16px;
        position: relative;
      }
      &__count {
        position: absolute;
        width: 10px;
        height: 10px;
        margin-left: 2px;
        font-size: 11px;
        text-decoration: none;
        color: var(--black);
      }
      &__link {
        color: var(--black);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &-logo {
    color: var(--black);
    font-size: 24px;
    text-decoration: none;
    font-family: var(--halvar);
    text-align: center;
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
      color: var(--black);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>