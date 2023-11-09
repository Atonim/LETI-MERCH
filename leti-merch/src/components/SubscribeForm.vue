<template>
  <form class="subscribe-form">
    <input
      type="text"
      placeholder="your@email.com"
      class="input-text subscribe-form__input"
    />
    <ui-button height="40px" borderRadius="0">Подписаться</ui-button>
  </form>
</template>
<script setup>
import uiButton from "@/components/UI/Button.vue";
</script>
<style lang="scss" scoped>
.subscribe-form {
  display: flex;
  height: 40px;
  &__input {
    border: 1px solid var(--white);
  }
}
</style>