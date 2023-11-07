import { defineStore } from "pinia";
import { ref, computed, watch } from 'vue';

export const useCartStore = defineStore("cartStore", () => {

  const cart = ref([]);

  const cartInLocalStorage = localStorage.getItem('cart');
  if (cartInLocalStorage) {
    cart.value = JSON.parse(cartInLocalStorage);
    console.log(JSON.parse(cartInLocalStorage))
  }

  const favouriteProducts = computed(() => cart.value.filter(el => el.isFavourite === true));



  //  const updateSettings = (partialSettings) => {
  //    const settings = {
  //      ...this.settings,
  //      ...partialSettings,
  //    }

  //    localStorage.setItem('cart', JSON.stringify(settings));
  //  },
  //},

  //  const getSettings = () => {
  //  const settings = localStorage.getItem('cart')

  //  return settings ? JSON.parse(settings) : getDefaultSettings()
  //},



  const addToCart = (product, quantity) => {
    const cartIndex = cart.value.findIndex(el => el.id === product.id)
    if (cartIndex === -1)
      cart.value.push({ ...product, quantity });
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
    addToCart, toggleFavourite
  }
})