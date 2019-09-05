import axios from 'axios';

const actions = {
  // eslint-disable-next-line
  createUser({}, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/user`, payload);
  },
  // eslint-disable-next-line
  login({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/login`, payload)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        dispatch('getUser');
        return response;
      });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('setUser', null);
  },
  getUser({ commit }) {
    return axios.get(`${process.env.VUE_APP_SERVER_URL}/user`)
      .then((response) => {
        commit('setUser', response.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        commit('setUser', null);
      });
  },
  createAddress({ dispatch }, payload) {
    return axios.post(`${process.env.VUE_APP_SERVER_URL}/addresses`, payload)
      .then(() => {
        dispatch('getUser');
      });
  },
  deleteAddress({ dispatch }, payload) {
    return axios.delete(`${process.env.VUE_APP_SERVER_URL}/addresses/${payload}`)
      .then(() => {
        dispatch('getUser');
      });
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

const state = {
  user: null,
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
