const products = [
  {
    id: 1,
    img: "/img/product1.png",
    title: 'Свитшот "ЛЭТИ" №1',
    description: "Футболка1 ЛЭТИ",
    price: 250,
    isFavourite: false,
  },
  {
    id: 2,
    img: "/img/product2.png",
    title: 'Свитшот "ЛЭТИ" №2',
    description: "Футболка1 ЛЭТИ",
    price: 255,
    isFavourite: false,
  },
  {
    id: 3,
    img: "/img/product3.png",
    title: 'Свитшот "ЛЭТИ" №3',
    description: "Футболка1 ЛЭТИ",
    price: 150,
    isFavourite: true,
  },
  {
    id: 4,
    img: "/img/product4.png",
    title: 'Свитшот "ЛЭТИ" №4',
    description: "Футболка1 ЛЭТИ",
    price: 240,
    isFavourite: false,
  },
  {
    id: 5,
    img: "/img/product1.png",
    title: 'Свитшот "ЛЭТИ" №1',
    description: "Футболка1 ЛЭТИ",
    price: 250,
    isFavourite: false,
  },
  {
    id: 6,
    img: "/img/product2.png",
    title: 'Свитшот "ЛЭТИ" №2',
    description: "Футболка1 ЛЭТИ",
    price: 255,
    isFavourite: false,
  },
  {
    id: 7,
    img: "/img/product3.png",
    title: 'Свитшот "ЛЭТИ" №3',
    description: "Футболка1 ЛЭТИ",
    price: 150,
    isFavourite: true,
  },
  {
    id: 8,
    img: "/img/product4.png",
    title: 'Свитшот "ЛЭТИ" №4',
    description: "Футболка1 ЛЭТИ",
    price: 240,
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