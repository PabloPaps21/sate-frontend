import axios from 'axios';

const actions = {
  getAllProducts({ commit }) {
    return axios.get('http://127.0.0.1:3333/products')
      .then((response) => {
        commit('setProducts', response.data);
      });
  },
};

const mutations = {
  setProducts(state, products) {
    state.allProducts = products;
  },
};

const state = {
  allProducts: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
