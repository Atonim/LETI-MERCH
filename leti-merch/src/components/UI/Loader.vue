<template>
  <div class="container">
    <pulse-loader :color="color" :size="size"></pulse-loader>
  </div>
</template>

<script setup>
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import { ref } from "vue";
const color = ref("black");
const size = ref("15px");
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  justify-content: center;
  margin-bottom: 15px;
}
</style>