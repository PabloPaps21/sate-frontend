import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/cart';
import products from './modules/products';
import user from './modules/user';
import admin from './modules/admin';
import wishlist from './modules/wishlist';
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cart,
    products,
    user,
    admin,
    wishlist,
  },
  strict: true,
});
