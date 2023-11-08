import axios from 'axios'
import config from '@/config.js'

export const HTTP = axios.create({
  baseURL: config.MOCK
})

export default {
  async getProducts() {
    try {
      const response = await HTTP.get('/categories/0');
      return response.data.result
    } catch (e) {
      console.log(e)
    }
  },
  async getCategories() {
    try {
      const response = await HTTP.get('/categories');
      return response.data.result
    } catch (e) {
      console.log(e)
    }
  },
  async getProductsByCategory(category) {
    try {
      const response = await HTTP.get(`/categories/${category}`);
      return response.data.result
    } catch (e) {
      console.log(e)
    }
  },
  async getProductById(id) {
    try {
      const response = await HTTP.get(`/items/${id}`);
      return response.data.result
    } catch (e) {
      console.log(e)
    }
  },
}