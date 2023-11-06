import { createRouter, createWebHistory } from "vue-router";
import Main from '@/views/Main.vue';
import Product from '@/views/Product.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Main
  },
  {
    path: '/user',
    name: 'User',
    component: Main
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Main
  },
  {
    path: '/lookbook',
    name: 'Lookbook',
    component: Main
  },
  {
    path: '/about',
    name: 'About',
    component: Main
  },

  ]
});

export default router;