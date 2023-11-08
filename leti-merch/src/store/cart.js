import { defineStore } from "pinia";
import { ref, computed, watch } from 'vue';

export const useCartStore = defineStore("cartStore", () => {

  const cart = ref([]);

  const cartInLocalStorage = localStorage.getItem('cart');
  if (cartInLocalStorage) {
    cart.value = JSON.parse(cartInLocalStorage);
  }

  const favouriteProducts = computed(() => cart.value.filter(el => el.isFavourite === true));

  const addToCart = (product, quantity) => {
    console.log(product)
    const cartProduct = cart.value.find(el => el.id === product.id && el.type === product.type)
    if (!cartProduct)
      cart.value.push({ ...product, quantity });
    else
      cartProduct.quantity += quantity;
  }
  const removeFromCart = (product) => {
    console.log(product);
    cart.value = cart.value.filter(el => el.id !== product.id || (el.id === product.id && el.type !== product.type))
  }

  const purchase = (product) => {
    cart.value = [];
  }

  const toggleFavourite = (product) => {
    product.isFavourite ? product.isFavourite = false : product.isFavourite = true;
  }


  watch(
    cart,
    (state) => {
      localStorage.setItem('cart', JSON.stringify(state))
      console.log(JSON.stringify(state))
    },
    { deep: true })

  return {
    cart, favouriteProducts, cartInLocalStorage,
    addToCart, toggleFavourite, removeFromCart, purchase
  }
})