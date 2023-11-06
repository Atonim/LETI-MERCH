import { defineStore } from "pinia";
export const useCartStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(product, quantity) {
      const cartIndex = this.cart.findIndex(el => el.id === product.id)
      if (cartIndex)
        this.cart.push({ ...product, quantity });
    }
  }
})