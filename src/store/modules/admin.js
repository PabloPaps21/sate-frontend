import axios from 'axios';

const actions = {
  getCategories({ commit }) {
    return axios.get('http://127.0.0.1:3333/categories')
      .then((response) => {
        commit('setCategories', response.data);
      });
  },
  createCategory({ dispatch }, payload) {
    return axios.post('http://127.0.0.1:3333/categories', payload)
      .then(() => {
        dispatch('getCategories');
      });
  },
  deleteCategory({ dispatch }, payload) {
    return axios.delete(`http://127.0.0.1:3333/categories/${payload}`)
      .then(() => {
        dispatch('getCategories');
      });
  },
  getTags({ commit }) {
    return axios.get('http://127.0.0.1:3333/tags')
      .then((response) => {
        commit('setTags', response.data);
      });
  },
  createTag({ dispatch }, payload) {
    return axios.post('http://127.0.0.1:3333/tags', payload)
      .then(() => {
        dispatch('getTags');
      });
  },
  deleteTag({ dispatch }, payload) {
    return axios.delete(`http://127.0.0.1:3333/tags/${payload}`)
      .then(() => {
        dispatch('getTags');
      });
  },
  getProducts({ commit }) {
    return axios.get('http://127.0.0.1:3333/all')
      .then((response) => {
        commit('setProducts', response.data);
      });
  },
  createProduct({ dispatch }, payload) {
    return axios.post('http://127.0.0.1:3333/products', payload)
      .then(() => {
        dispatch('getProducts');
      });
  },
  deleteProduct({ dispatch }, payload) {
    return axios.delete(`http://127.0.0.1:3333/products/${payload}`)
      .then(() => {
        dispatch('getProducts');
      });
  },
};

const mutations = {
  setCategories(state, categories) {
    state.categories = categories;
  },
  setProducts(state, products) {
    state.products = products;
  },
  setTags(state, tags) {
    state.tags = tags;
  },
};

const state = {
  categories: [],
  tags: [],
  products: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
