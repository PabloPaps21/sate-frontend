import axios from 'axios';

const actions = {
  getWishlist({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/wishlist`)
      .then((response) => {
        commit('setWishlist', response.data);
      });
  },
  addToWishlist({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/wishlist`, { productId: payload })
      .then(() => {
        dispatch('getWishlist');
      });
  },
  removeFromWishlist({ dispatch }, payload) {
    return axios.delete(`${process.env.VUE_APP_SERVER_URL}/wishlist/${payload}`)
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
