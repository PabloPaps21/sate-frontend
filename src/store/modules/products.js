import axios from 'axios';

const actions = {
  getAllFood({ commit }) {
    return axios.get('http://127.0.0.1:3333/food')
      .then((response) => {
        commit('setFood', response.data);
      });
  },
  getAllProducts({ commit }) {
    return axios.get('http://127.0.0.1:3333/products')
      .then((response) => {
        commit('setProducts', response.data);
      });
  },
};

const mutations = {
  setFood(state, food) {
    state.allFood = food;
  },
  setProducts(state, products) {
    state.allProducts = products;
  },
};

const state = {
  allFood: [],
  allProducts: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
