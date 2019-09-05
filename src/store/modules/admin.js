import axios from 'axios';

const actions = {
  getCategories({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/categories`)
      .then((response) => {
        commit('setCategories', response.data);
      });
  },
  createCategory({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/categories`, payload)
      .then(() => {
        dispatch('getCategories');
      });
  },
  deleteCategory({ dispatch }, payload) {
    return axios.delete(`${process.env.VUE_APP_SERVER_URL}/categories/${payload}`)
      .then(() => {
        dispatch('getCategories');
      });
  },
  getTags({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/tags`)
      .then((response) => {
        commit('setTags', response.data);
      });
  },
  createTag({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/tags`, payload)
      .then(() => {
        dispatch('getTags');
      });
  },
  deleteTag({ dispatch }, payload) {
    return axios.delete(`${process.env.VUE_APP_SERVER_URL}/tags/${payload}`)
      .then(() => {
        dispatch('getTags');
      });
  },
  getProduct({ commit }, payload) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/products/${payload}`)
      .then((response) => {
        commit('setProduct', response.data);
      });
  },
  editProduct({ dispatch }, payload) {
    return axios.patch(`${process.env.VUE_APP_SERVER_URL}/products/${payload.id}`, payload.data)
      .then(() => {
        dispatch('getProducts');
      });
  },
  getProducts({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/all`)
      .then((response) => {
        commit('setProducts', response.data);
      });
  },
  createProduct({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/products`, payload)
      .then(() => {
        dispatch('getProducts');
      });
  },
  deleteProduct({ dispatch }, payload) {
    return axios.delete(`${process.env.VUE_APP_SERVER_URL}/products/${payload}`)
      .then(() => {
        dispatch('getProducts');
      });
  },
  getWeekOrders({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/week-orders`)
      .then((response) => {
        commit('setOrders', response.data);
      });
  },
  getEvent({ commit }, payload) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/event/${payload}`)
      .then((response) => {
        commit('setEvent', response.data);
      });
  },
  editEvent({ dispatch }, payload) {
    return axios.patch(`${process.env.VUE_APP_SERVER_URL}/admin/event/${payload.id}`, payload.data)
      .then(() => {
        dispatch('getEvent', payload.id);
      });
  },
  // eslint-disable-next-line no-empty-pattern
  createEvent({}, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/event`, payload)
      .then(response => response.data);
  },
  // eslint-disable-next-line no-empty-pattern
  createDate({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/admin/event/${payload.id}/dates`, payload.data)
      .then(() => {
        dispatch('getEvent', payload.id);
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
  setProduct(state, product) {
    state.product = product;
  },
  setTags(state, tags) {
    state.tags = tags;
  },
  setOrders(state, orders) {
    state.orders = orders;
  },
  setEvent(state, event) {
    state.event = event;
  },
};

const state = {
  categories: [],
  tags: [],
  products: [],
  orders: [],
  product: {},
  event: {},
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
