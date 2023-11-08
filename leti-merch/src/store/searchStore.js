import { defineStore } from "pinia";
import { ref, watch } from 'vue'
export const useSearchStore = defineStore("searchStore", () => {
  const searchQuery = ref('');


  //const searchInLocalStorage = localStorage.getItem('searchCart');
  //if (searchInLocalStorage) {
  //  searchQuery.value = JSON.parse(searchInLocalStorage);
  //}

  const searchUpdate = (query) => searchQuery.value = query;
  //state: () => ({
  //  products: [],
  //}),
  //actions: {
  //  getProducts
  //},
  //getters: {
  //  favouriteProducts() {
  //    return this.cart.filter(el => el.isFavourite === true);
  //  }
  //}

  //watch(
  //  searchQuery,
  //  (state) => {
  //    console.log(JSON.stringify(state))
  //  },
  //  { deep: true })

  return {
    searchQuery, searchUpdate
  }
})