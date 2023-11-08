<template>
  <div class="cart">
    <CartList />
  </div>
</template>

<script setup>
import CartList from "@/components/CartList.vue";
</script>

<style lang="scss" scoped>
.cart {
  flex: 1 0 auto;
  padding: 91px 152px 0 152px;
}
</style>