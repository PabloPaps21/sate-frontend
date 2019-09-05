import Vue from 'vue';
import Router from 'vue-router';
import axios from 'axios';
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
      component: () => import('./views/Experience.vue'),
    },
    {
      path: '/calendar',
      component: () => import('./views/Calendar.vue'),
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
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/register',
      component: () => import('./views/Register.vue'),
    },
    {
      path: '/verify/:code',
      beforeEnter: (to, from, next) => {
        const { params } = to;
        axios.get(`${process.env.VUE_APP_SERVER_URL}/verify/${params.code}`)
          .then(() => {
            next('/login');
          });
      },
    },
    {
      path: '/forgot-password',
      component: () => import('./views/ForgotPassword.vue'),
    },
    {
      path: '/reset-password/:token',
      component: () => import('./views/ResetPassword.vue'),
    },
    {
      path: '/checkout',
      component: () => import('./views/Checkout.vue'),
    },
    {
      path: '/admin/categories',
      component: () => import('./views/admin/CategoriesAndTags.vue'),
      meta: { requiresAdmin: true },
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
      path: '/admin',
      component: () => import('./views/AdminMenu.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/products',
      component: () => import('./views/products.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/events',
      component: () => import('./views/admin/NewEvent.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/events/:id',
      component: () => import('./views/admin/NewEvent.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/food-schedule',
      component: () => import('./views/admin/FoodSchedule.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/week-orders',
      component: () => import('./views/admin/WeekOrders.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/new-product',
      component: () => import('./views/admin/NewProduct.vue'),
      meta: { requiresAdmin: true },
    },
    {
      path: '/admin/new-product/:id',
      component: () => import('./views/admin/NewProduct.vue'),
      meta: { requiresAdmin: true },
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
