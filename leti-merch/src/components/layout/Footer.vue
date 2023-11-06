<template lang="">
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-menu">
          <div class="footer-menu-column">
            <span class="footer-menu__title">Разделы</span>
            <router-link to="/" class="footer-menu__link">Каталог</router-link>
            <router-link to="/" class="footer-menu__link">Лукбук</router-link>
            <router-link to="/" class="footer-menu__link">О бренде</router-link>
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu__title">Социльные сети</span>
            <router-link to="/" class="footer-menu__link">Вконтакте</router-link>
            <router-link to="/" class="footer-menu__link">Телеграм</router-link>
            <router-link to="/" class="footer-menu__link">Инстаграм</router-link>
          </div>
          <div class="footer-menu-column">
            <span class="footer-menu__title">Информация</span>
            <router-link to="/" class="footer-menu__link">Политика конфиденциальности</router-link>
            <router-link to="/" class="footer-menu__link">Публичная оферта</router-link>
          </div>
        </div>
        <div class="footer-subscribe">
          <SubscribeForm />
        </div>
      </div>
      <div class="footer-bottom">
        <span class="footer-bottom__copyright">Copyright 2023 LETI Merch</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import SubscribeForm from "@/components/SubscribeForm.vue";
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--black);
  color: #fff;
  &-content {
    padding: 58px 82px 25px 82px;
  }
  &-top {
    display: grid;
    grid-template-columns: 540px 1fr;
    column-gap: 110px;
    border-bottom: 1px solid #fff;
    @media screen and (max-width: 1150px) {
      column-gap: 10px;
      grid-template-columns: 450px 1fr;
    }
  }
  &-menu {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    &__title {
      color: #fff;
      margin-bottom: 12px;
      display: block;
    }
    &__link {
      display: block;
      color: #fff;
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