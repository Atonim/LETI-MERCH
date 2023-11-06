<template>
  <header class="header">
    <div class="header-top">
      <router-link to="/" class="header-top-logo">
        <img src="/svg/header-logo-shop.svg" alt="search" class="header-logo" />
      </router-link>
      <div class="header-menu">
        <router-link
          class="header-menu__link"
          v-for="(element, i) of menu"
          :to="element.path"
          :key="i"
          >{{ element.name }}</router-link
        >
      </div>
      <div class="header-search">
        <input type="text" class="header-search__input" />
      </div>
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
  height: 91px; //задаем фикс высоту
  background-color: rgba(42, 42, 42, 0.1);
  backdrop-filter: blur(5px);
  position: absolute;
  z-index: 10;
  padding: 20px 0;
  font-size: 16px;
  gap: 10px;
  color: var(--white);
  //width: 1600px;
  &-top {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin: 0 152px;
    color: var(--white);
    &-logo {
      width: 135px;
    }
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
      }
      &__link {
        color: var(--white);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &-logo {
    margin-top: 5px;
    cursor: pointer;
  }
  &-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin: 0 22px;
      color: var(--white);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &-search {
    display: flex;
    justify-content: center;
    align-items: center;
    &__link {
      margin: 0 22px;
      color: var(--white);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>