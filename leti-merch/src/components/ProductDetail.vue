<template>
  <div class="product">
    <div class="product-top">
      <div class="product-image">
        <img
          :src="product.images[0]"
          :alt="product.name"
          class="product-image__img"
        />
      </div>

      <div class="product-description">
        <h2 class="product-name">{{ product.name }}</h2>

        <span class="product-price">{{ activeType.price }} ₽</span>

        <div class="product-block">
          <div>{{ product.description }}</div>
        </div>

        <div class="product-size">
          <span class="product-size__title">Выберите размер</span>
          <div class="product-size-grid">
            <div
              class="product-size-grid__item"
              v-for="el in product.types"
              :key="el.id"
              :class="el.id === activeType.id ? 'active' : ''"
              @click="changeType(el.id)"
            >
              {{ el.name }}
            </div>
          </div>
        </div>

        <div class="product-block">
          <span class="product-block__title">Количество</span>
          <div class="product-quantity">
            <span
              class="product-quantity-symbol"
              @click="changeQuantity('minus')"
              >-</span
            >
            <span class="product-quantity-value">{{ quantity }}</span>
            <span
              class="product-quantity-symbol"
              @click="changeQuantity('plus')"
              >+</span
            >
          </div>
        </div>

        <uiButton @click="cartStore.addToCart(productForCart, quantity)"
          >Добавить в корзину</uiButton
        >
      </div>
    </div>

    <div class="product-bottom">
      <div class="product-bottom-buttons">
        <div class="description-button active product-bottom-buttons__item">
          Описание
        </div>
        <div class="purchase-button product-bottom-buttons__item">Оплата</div>
        <div class="delivery-button product-bottom-buttons__item">Доставка</div>
      </div>
      <div class="product-bottom-info">
        <div class="product-bottom-info__description">
          {{ product.description }}
          <div
            v-if="product.properties.filter((el) => el.subtitle)"
            class="product-bottom-info-recoms"
          >
            <div class="product-bottom-info-recoms__title">
              Рекоммендации по уходу
            </div>
            <div
              v-for="element in product.properties.filter((el) => el.subtitle)"
              :key="element.name"
              class="product-bottom-info-properties-row"
            >
              <div class="product-bottom-info-properties-row__name">
                {{ element.name }}
              </div>
              <div class="product-bottom-info-properties-row__value">
                {{ element.value }}
              </div>
            </div>
          </div>
        </div>
        <div class="product-bottom-info-properties">
          <div
            v-for="element in product.properties.filter((el) => !el.subtitle)"
            :key="element.name"
            class="product-bottom-info-properties-row"
          >
            <div class="product-bottom-info-properties-row__name">
              {{ element.name }}
            </div>
            <div class="product-bottom-info-properties-row__value">
              {{ element.value }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import uiButton from "@/components/UI/Button.vue";
import { useCartStore } from "@/store/cart.js";
import api from "@/api.js";

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

console.log(props.product);

const activeType = ref(props.product.types[0]);
console.log(activeType.value.id);
const quantity = ref(1);
const cartStore = useCartStore();

//const arrayMin = (arr) => {
//  return arr.reduce(function (p, v) {
//    return p.price > v.price ? p.price : v.price;
//  });
//};

//const minPrice = (arr) => {
//  let minim = arr[0].price;
//  for (let i = 1; i < arr.length; i++) {
//    if (arr[i].price < minim) minim = arr[i].price;
//  }
//  return minim;
//};

const productForCart = ref({
  name: props.product.name,
  price: activeType.value.price,
  avatar: props.product.images[0],
  id: props.product.id,
  type: activeType.value.id,
});

const changeQuantity = (type) => {
  if (type === "minus") {
    quantity.value === 1 ? (quantity.value = 1) : quantity.value--;
  }
  if (type === "plus") {
    quantity.value === 99 ? (quantity.value = 99) : quantity.value++;
  }
};

const changeType = (id) => {
  activeType.value = props.product.types.find((el) => el.id === id);
  productForCart.value.price = activeType.value.price;
  productForCart.value.type = activeType.value.id;
};
</script>

<style lang="scss" scoped>
.product {
  background: var(--block);
  padding: 50px 152px;
  color: var(--white);
  &-top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 65px;
  }
  &-bottom {
    margin-top: 50px;
    &-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      &__item {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--white);
        width: 432px;
        text-align: center;
        color: var(--white);
        font-size: 32px;
        font-weight: 700;
        height: 55px;
        cursor: pointer;
        &:hover {
          //border: 1px solid var(--black);
          background: var(--white);
          color: var(--black);
        }
      }
    }
    &-info {
      margin-top: 40px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 65px;
      &-properties {
        display: grid;
        grid-template-rows: repeat(auto, auto);
        &-row {
          display: grid;
          grid-template-columns: 1fr 2fr;
          column-gap: 10px;
          font-size: 16px;
          &__value {
            border-bottom: 1px solid var(--white);
            padding: 8px 0;
            display: flex;
            align-content: center;
          }
          &__name {
            padding: 8px 0;
            display: flex;
            align-items: center;
          }
        }
      }
      &-recoms {
        &__title {
          margin: 45px 0 15px 0;
          font-size: 24px;
          font-family: var(--halvar);
        }
      }
    }
  }
  &-image {
    &__img {
      border-radius: 10px;
    }
  }
  &-size {
    &__title {
      font-size: 16px;
    }
    &-grid {
      display: flex;
      justify-content: flex;
      align-items: center;
      margin: 10px 0;
      gap: 5px;
      &__item {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--white);
        border-radius: 4px;
        padding: 5px 15px;
        width: 80px;
        height: 50px;
        cursor: pointer;
        &:hover {
          //border: 1px solid var(--black);
          background: var(--white);
          color: var(--black);
        }
      }
    }
  }
  &-name {
    margin: 0 0 16px 0;
    font-family: var(--white);
    font-size: 48px;
  }
  &-price {
    display: block;
    font-size: 24px;
    margin-bottom: 28px;
  }
  &-block {
    margin: 20px 0;
    &__title {
      font-size: 16px;
    }
  }
  &-description {
    border-top: 1px solid var(--black);
  }
  &-param {
    display: block;
  }
  &-quantity {
    height: 50px;
    width: 122px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    padding: 0 16px;
    border: 1px solid var(--white);
    border-radius: 4px;
    &-symbol {
      color: var(--border-grey);
      cursor: pointer;
    }
  }
  .active {
    //border: 1px solid var(--black);
    background: var(--white);
    color: var(--black);
  }
}
</style>