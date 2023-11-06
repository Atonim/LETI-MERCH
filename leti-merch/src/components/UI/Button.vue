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
  color: #fff;
  padding: 0 32px;
  display: inline-flex; //если кнопка еще и ссылка
  align-items: center;
  justify-content: center;
  border: none;
  font-size: 16px;
  cursor: pointer;
  height: 56px;
  &:hover {
    opacity: 0.8;
  }
}
</style>