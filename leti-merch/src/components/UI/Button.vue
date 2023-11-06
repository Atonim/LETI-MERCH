<template lang="">
  <div>
    <button class="btn">
      <slot/>
    </button>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.btn {
  background: var(--black);
  color: var(--white);
  padding: 0 32px;
  display: inline-flex; //если кнопка еще и ссылка
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 24px;
  cursor: pointer;
  height: 62px;
  &:hover {
    opacity: 0.8;
  }
}
</style>