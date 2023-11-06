<template>
  <div class="product">
    <router-link :to="`product/${id}`">
      <img :src="img" :alt="title" class="product-img" />
    </router-link>
    <router-link :to="`product/${id}`" class="product-name">{{
      title
    }}</router-link>
    <span class="product-price">{{ price }} ₽</span>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.product {
  &-img {
    display: block;
    max-height: 300px;
    margin-bottom: 24px;
  }
  &-name {
    display: block;
    color: var(--black);
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 8px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  &-price {
    display: block;
    font-size: 18px;
    color: var(--black);
  }
}
</style>