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
  ],
});
