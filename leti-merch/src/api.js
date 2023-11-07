import axios from 'axios'
import config from '@/config.js'

export const HTTP = axios.create({
  baseURL: config.MOCK
})

export default {
  async getProducts() {
    try {
      const response = await HTTP.get('/categories/0');
      console.log(response.data);
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getCategories() {
    try {
      const response = await HTTP.get('/categories');
      console.log(response.data);
      return response.data
    } catch (e) {
      console.log(e)
    }
  },
  async getProductsByCategory(category) {
    try {
      const response = await HTTP.get(`/categories/${category}`);
      console.log(response.data);
      return response.data
    } catch (e) {
      console.log(e)
    }
  }
}