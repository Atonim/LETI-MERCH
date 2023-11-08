<template>
  <div>
    <input type="radio" class="chip" :id="category" />
    <label :for="category">{{ category }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  category: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.chip {
  position: relative;
  display: none;
  & + label {
    min-width: 45px;
    height: 25px;
    margin: 8px;
    padding: 10px;
    border-radius: 25px;
    position: relative;
    background: var(--black);
    color: var(--white);
    border: 1px solid var(--white);
    &:hover,
    &:checked,
    &:focus {
      cursor: pointer;
      background-color: var(--white);
      border: 1px solid var(--black);
      color: var(--black);
    }
  }
}
.active {
  .chip + label {
    cursor: pointer;
    background-color: var(--white);
    border: 1px solid var(--black);
    color: var(--black);
  }
}
</style>