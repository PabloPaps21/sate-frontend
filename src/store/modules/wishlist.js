import axios from 'axios';

const actions = {
  getWishlist({ commit }) {
    return axios.get('http://127.0.0.1:3333/wishlist')
      .then((response) => {
        commit('setWishlist', response.data);
      });
  },
  addToWishlist({ dispatch }, payload) {
    return axios.post('http://127.0.0.1:3333/wishlist', { productId: payload })
      .then(() => {
        dispatch('getWishlist');
      });
  },
  removeFromWishlist({ dispatch }, payload) {
    return axios.delete(`http://127.0.0.1:3333/wishlist/${payload}`)
      .then(() => {
        dispatch('getWishlist');
      });
  },
};

const mutations = {
  setWishlist(state, wishlist) {
    state.wishlist = wishlist;
  },
};

const state = {
  wishlist: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
