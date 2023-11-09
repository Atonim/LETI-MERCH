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
        <div class="header-search-container">
          <input
            type="text"
            class="header-search__input"
            placeholder="Найти"
            v-model="searchQuery"
          />
          <span class="header-search__aicon" @click="search">
            <img src="/svg/header-top-search.svg" alt="search" />
          </span>
        </div>
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
import { ref, watch } from "vue";
import { useCartStore } from "@/store/cart.js";
import { useRouter } from "vue-router";
import { useSearchStore } from "@/store/searchStore.js";

const searchQuery = ref("");
const emit = defineEmits(["search"]);

const router = useRouter();

const searchStore = useSearchStore();
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
    path: "/contacts",
  },
];
const search = () => {
  searchStore.searchUpdate(searchQuery.value);
  console.log(searchQuery.value);
  router.push("/catalog");
};
watch(searchQuery, (state) => {
  searchStore.searchUpdate(searchQuery.value);
  console.log(searchQuery.value);
  router.push("/catalog");
  //emit("create", searchQuery.value);
});
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 100vw;
  position: fixed;
  background-color: rgba(42, 42, 42, 0.1);
  backdrop-filter: blur(5px);
  z-index: 10;
  padding: 20px 0;
  font-size: 16px;
  gap: 10px;
  color: var(--white);
  &-top {
    display: grid;
    grid-template-columns: min-content 1.5fr 150px 1fr;
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
    gap: 25px;
    &__link {
      //margin: 0 22px;
      color: var(--white);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &-search {
    justify-content: center;
    display: flex;
    &-container {
      position: relative;
    }
    &__input {
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: 0.375rem 0.75rem;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: var(--white);
      background-color: transparent;
      border: 0 solid var(--white);
      border-bottom: 1px solid var(--white);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    &__input::-webkit-search-decoration,
    &__input::-webkit-search-cancel-button,
    &__input::-webkit-search-results-button,
    &__input::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }

    &__input::placeholder {
      color: var(--white);
      opacity: 0.7;
    }

    &__input:focus,
    &__input:hover {
      color: var(--white);
      background-color: rgba(158, 158, 158, 0.25);
      outline: 0;
    }

    &__input {
      padding-right: 2.5rem;
    }

    &__aicon {
      position: absolute;
      display: flex;
      align-items: center;
      top: 0;
      bottom: 0;
      right: 0.875rem;
      width: 1rem;
      cursor: pointer;
      color: var(--white);
      transition: color 0.15s ease-in-out;
    }

    &__aicon:hover {
      color: var(--black);
    }
  }
}
</style>