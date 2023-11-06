<template>
  <div>
    <button
      class="btn"
      :style="{
        backgroundColor: backgroundColor,
        color: textColor,
        border: border,
        borderRadius: borderRadius,
        fontSize: fontSize,
        height: height,
      }"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  backgroundColor: {
    type: String,
    default: "var(--white)",
  },
  textColor: {
    type: String,
    default: "var(--black)",
  },
  border: {
    type: String,
    default: "none",
  },
  borderRadius: {
    type: String,
    default: "8px",
  },
  fontSize: {
    type: String,
    default: "24px",
  },
  height: {
    type: String,
    default: "62px",
  },
});
</script>

<style lang="scss" scoped>
.btn {
  padding: 0 32px;
  display: inline-flex; //если кнопка еще и ссылка
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>