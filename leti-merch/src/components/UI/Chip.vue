<template>
  <div>
    <button class="chip">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.chip {
  background: var(--white);
  //color: var(--white);
  //padding: 0 32px;
  //display: inline-flex;
  //align-items: center;
  //justify-content: center;
  //border: none;
  //font-size: 24px;
  //cursor: pointer;
  //height: 62px;
  //&:hover {
  //  opacity: 0.8;
  //}
}
</style>