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
  getTags({ commit }) {
    return axios.get('http://127.0.0.1:3333/tags')
      .then((response) => {
        commit('setTags', response.data);
      });
  },
  // eslint-disable-next-line no-empty-pattern
  createMenu({}, data) {
    return axios.post('http://127.0.0.1:3333/schedule', data);
  },
  getAdminFood({ commit }) {
    return axios.get('http://127.0.0.1:3333/admin/food')
      .then((response) => {
        commit('setFood', response.data);
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
  setTags(state, tags) {
    state.tags = tags;
  },
};

const state = {
  allFood: [],
  allProducts: [],
  tags: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
