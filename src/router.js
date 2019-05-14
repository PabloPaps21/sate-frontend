import Vue from 'vue';
import Router from 'vue-router';
import Inicio from './views/inicio.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Inicio,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/food',
      component: () => import('./views/food.vue'),
    },
    {
      path: '/market',
      component: () => import('./views/market.vue'),
    },
    {
      path: '/experience',
      component: () => import('./views/experience.vue'),
    },
    {
      path: '/design',
      component: () => import('./views/design.vue'),
    },
    {
      path: '/contact',
      component: () => import('./views/contact.vue'),
    },
    {
      path: '/login',
      component: () => import('./views/login.vue'),
    },
    {
      path: '/register',
      component: () => import('./views/register.vue'),
    },
    {
      path: '/checkout',
      component: () => import('./views/checkout.vue'),
    },
    {
      path: '/resume',
      component: () => import('./views/resume.vue'),
    },
    {
      path: '/categories',
      component: () => import('./views/categories.vue'),
    },
    {
      path: '/tags',
      component: () => import('./views/tags.vue'),
    },
    {
      path: '/products',
      component: () => import('./views/products.vue'),
    },
    {
      path: '/tyc',
      component: () => import('./views/tyc.vue'),
    },
    {
      path: '/politics',
      component: () => import('./views/politics.vue'),
    },
    {
      path: '/account',
      component: () => import('./views/account.vue'),
      children: [
        {
          path: 'user',
          component: () => import('./views/user.vue'),
        },
        {
          path: 'addresses',
          component: () => import('./views/addresses.vue'),
        },
        {
          path: 'wishlist',
          component: () => import('./views/wishlist.vue'),
        },
        {
          path: 'orders',
          component: () => import('./views/orders.vue'),
        },
      ],
    },
    {
      path: '/wishlist',
      component: () => import('./views/wishlist.vue'),
    },
    {
      path: '/delivery',
      component: () => import('./components/delivery.vue'),
    },
    {
      path: '/admin/food-schedule',
      component: () => import('./views/admin/foodSchedule.vue'),
    },
    {
      path: '/admin/week-orders',
      component: () => import('./views/admin/weekOrders.vue'),
    },
  ],
});
