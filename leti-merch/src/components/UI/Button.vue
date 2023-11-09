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
    default: "transparent",
  },
  textColor: {
    type: String,
    default: "var(--white)",
  },
  border: {
    type: String,
    default: "1px solid var(--white)",
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
  padding: 0 16px;
  display: inline-flex; //если кнопка еще и ссылка
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: var(--white) !important;
    color: var(--black) !important;
    border-color: (--black) !important;
  }
  &:active {
    opacity: 0.5;
  }
}
</style>