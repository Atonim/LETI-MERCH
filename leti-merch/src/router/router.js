import { createRouter, createWebHistory } from "vue-router";
import Main from '@/views/Main.vue';
import Product from '@/views/Product.vue';
import Cart from '@/views/Cart.vue';
import User from '@/views/User.vue';
import Catalog from '@/views/Catalog.vue';
import About from '@/views/About.vue';
import NotFound from '@/views/NotFound.vue';
import Contacts from '@/views/Contacts.vue';

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
    component: Cart
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }

  ]
});

export default router;