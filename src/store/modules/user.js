import axios from 'axios';
import router from '../../router';

const actions = {
  // eslint-disable-next-line
  createUser({}, payload) {
    return axios.post('http://127.0.0.1:3333/user', payload);
  },
  // eslint-disable-next-line
  login({ dispatch }, payload) {
    return axios.post('http://127.0.0.1:3333/login', payload)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
        dispatch('getUser');
      });
  },
  logout({ commit }) {
    localStorage.removeItem('token');
    commit('setUser', null);
  },
  getUser({ commit }) {
    return axios.get('http://127.0.0.1:3333/user')
      .then((response) => {
        commit('setUser', response.data);
      })
      .catch(() => {
        localStorage.removeItem('token');
        commit('setUser', null);
        router.push('/login');
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
