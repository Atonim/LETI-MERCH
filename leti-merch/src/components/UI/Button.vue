<template>
  <div>
    <button class="btn">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.btn {
  background: var(--white);
  color: var(--black);
  padding: 0 32px;
  display: inline-flex; //если кнопка еще и ссылка
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  font-size: 24px;
  cursor: pointer;
  height: 62px;
  &:hover {
    opacity: 0.8;
  }
}
</style>