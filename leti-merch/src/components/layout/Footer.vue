<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-menu">
          <div class="footer-menu-column">
            <span class="footer-menu__title">Разделы</span>
            <router-link to="/catalog" class="footer-menu__link"
              >Каталог</router-link
            >
            <router-link to="/about" class="footer-menu__link"
              >О нас</router-link
            >
            <router-link to="/contacts" class="footer-menu__link"
              >Контакты</router-link
            >
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu__title">Социльные сети</span>
            <router-link to="/" class="footer-menu__link"
              >Вконтакте</router-link
            >
            <router-link to="/" class="footer-menu__link">Телеграм</router-link>
            <router-link to="/" class="footer-menu__link"
              >Инстаграм</router-link
            >
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu__title">Информация</span>
            <router-link to="/" class="footer-menu__link"
              >Политика конфиденциальности</router-link
            >
            <router-link to="/" class="footer-menu__link"
              >Публичная оферта</router-link
            >
          </div>
        </div>
        <div class="footer-subscribe">
          <SubscribeForm />
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom__copyright">Copyright 2023 ETU.SHOP</span>
        <router-link to="/" class="footer-bottom-logo">
          <img
            src="/svg/header-logo-shop.svg"
            alt="search"
            class="header-logo"
          />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribeForm from "@/components/SubscribeForm.vue";
</script>

<style lang="scss" scoped>
.footer {
  flex: 0 0 auto;
  background-color: var(--dark);
  color: var(--white);
  &-content {
    padding: 58px 152px 25px 152px;
  }
  &-top {
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
    border-bottom: 1px solid var(--white);
    @media screen and (max-width: 1150px) {
      column-gap: 10px;
      grid-template-columns: 450px 1fr;
    }
  }
  &-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &__title {
      color: var(--white);
      margin-bottom: 12px;
      display: block;
    }
    &__link {
      display: block;
      color: var(--white);
      font-size: 14px;
      text-decoration: none;
      margin-bottom: 12px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &-bottom {
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    &-copyright {
      font-size: 14px;
    }
  }
}
</style>