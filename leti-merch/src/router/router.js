import { createRouter, createWebHistory } from "vue-router";
import Main from '@/views/Main.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'Main',
    component: Main
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
  {
    path: '/product',
    name: 'Product',
    component: Main
  },
  ]
});

export default router;