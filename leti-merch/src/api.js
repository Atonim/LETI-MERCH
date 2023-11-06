const products = [
  {
    id: 1,
    img: "/img/product1.png",
    title: 'Свитшот "ЛЭТИ" №1',
    description: "Футболка1 ЛЭТИ",
    price: 250,
  },
  {
    id: 2,
    img: "/img/product2.png",
    title: 'Свитшот "ЛЭТИ" №2',
    description: "Футболка1 ЛЭТИ",
    price: 255,
  },
  {
    id: 3,
    img: "/img/product3.png",
    title: 'Свитшот "ЛЭТИ" №3',
    description: "Футболка1 ЛЭТИ",
    price: 150,
  },
  {
    id: 4,
    img: "/img/product4.png",
    title: 'Свитшот "ЛЭТИ" №4',
    description: "Футболка1 ЛЭТИ",
    price: 240,
  },
];

export default {
  getPopularProducts() {
    return products;
  },
  getProduct(id) {
    return products.find(el => el.id == id);
  }
}