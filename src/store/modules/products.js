import axios from 'axios';

const actions = {
  getAllFood({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/food`)
      .then((response) => {
        commit('setFood', response.data);
      });
  },
  getAllProducts({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/products`)
      .then((response) => {
        commit('setProducts', response.data);
      });
  },
  getTags({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/tags`)
      .then((response) => {
        commit('setTags', response.data);
      });
  },
  getMenu({ commit }, payload) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/schedule?startDate=${payload}`)
      .then((response) => {
        commit('setMenu', response.data);
      });
  },
  // eslint-disable-next-line no-empty-pattern
  createMenu({}, data) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/schedule`, data);
  },
  // eslint-disable-next-line no-empty-pattern
  editMenu({}, payload) {
    return axios.patch(`${process.env.VUE_APP_SERVER_URL}/schedule/${payload.id}`, { selected_ids: payload.selected_ids });
  },
  getAdminFood({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/admin/food`)
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
  setMenu(state, menu) {
    state.menu = menu;
  },
};

const state = {
  allFood: [],
  allProducts: [],
  tags: [],
  menu: [],
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
