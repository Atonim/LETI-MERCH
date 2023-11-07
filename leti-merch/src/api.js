import axios from 'axios'
import config from '@/config.js'

export const HTTP = axios.create({
  baseURL: config.MOCK
})


const products = [
  {
    id: 1,
    img: "/img/product1.png",
    title: 'Свитшот "ЛЭТИ" №1',
    description: "Футболка1 ЛЭТИ",
    price: 2520,
    isFavourite: false,
  },
  {
    id: 2,
    img: "/img/product2.png",
    title: 'Свитшот "ЛЭТИ" №2',
    description: "Футболка1 ЛЭТИ",
    price: 2155,
    isFavourite: false,
  },
  {
    id: 3,
    img: "/img/product3.png",
    title: 'Свитшот "ЛЭТИ" №3',
    description: "Футболка1 ЛЭТИ",
    price: 1250,
    isFavourite: true,
  },
  {
    id: 4,
    img: "/img/product4.png",
    title: 'Свитшот "ЛЭТИ" №4',
    description: "Футболка1 ЛЭТИ",
    price: 2430,
    isFavourite: false,
  },
  {
    id: 5,
    img: "/img/product5.png",
    title: 'Свитшот "ЛЭТИ" №1',
    description: "Футболка1 ЛЭТИ",
    price: 2550,
    isFavourite: false,
  },
  {
    id: 6,
    img: "/img/product6.png",
    title: 'Свитшот "ЛЭТИ" №2',
    description: "Футболка1 ЛЭТИ",
    price: 2455,
    isFavourite: false,
  },
  {
    id: 7,
    img: "/img/product7.png",
    title: 'Свитшот "ЛЭТИ" №3',
    description: "Футболка1 ЛЭТИ",
    price: 1250,
    isFavourite: true,
  },
  {
    id: 8,
    img: "/img/product.png",
    title: 'Свитшот "ЛЭТИ" №4',
    description: "Футболка1 ЛЭТИ",
    price: 2430,
    isFavourite: false,
  },
];

export default {
  getPopularProducts() {
    return products.slice(0, 4);
  },
  getProduct(id) {
    return products.find(el => el.id == id);
  },
  getCatalog() {
    return products
  }
}

//export default {
//  async getProducts() {
//    try {
//      const response = await HTTP.get('/categories');
//      console.log(response.data);
//      return response.data
//    } catch (e) {
//      console.log(e)
//    }
//  }
//}