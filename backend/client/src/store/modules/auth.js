import axios from 'axios';
// import { Router } from 'express';
import router from '../../router';

const state = {
  token: localStorage.getItem('token') || '',
  user: JSON.parse(localStorage.getItem('user') || 'false'),
  status: '',
  loggedin: JSON.parse(localStorage.getItem('loggedinST') || 'false'),
  error: null,
};
const getters = {
  isLoggedIn: (state) => state.loggedin, // basically the same as below
  // isLoggedIn: (state) => !!state.loggedin,
  authState: (state) => {
    return state.status;
  },
  user: (state) => state.user,
  error: (state) => state.error,
};
const actions = {
  // Login Action

  async login({ commit }, user) {
    commit('auth_request');
    try {
      let res = await axios.post(
        'http://192.168.2.104:5000/api/users/login',
        user
      );
      // console.log('xxa');
      // console.log(res);
      if (res.data.success) {
        const token = res.data.token;
        const user = res.data.user;
        // Store token into localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        // localStorage.setItem('user', user);
        // Set axios defaults
        axios.defaults.headers.common['Authorization'] = token;
        commit('auth_success', token, user);
      }
      return res;
    } catch (err) {
      commit('auth_error', err);

      // console.log(err.msg);
      return err;
    }
  },
  // Register Action
  async register({ commit }, userData) {
    try {
      commit('register_request');
      let res = await axios.post(
        'http://192.168.2.104:5000/api/users/register',
        userData
      );
      // console.log('object');
      console.log(res);
      if (res.data.success !== undefined) {
        commit('register_success');
      }
      // return { success: true };
      return res;
    } catch (err) {
      commit('register_error', err);
      return err;
    }
  },
  // Logout User
  async logout({ commit }) {
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/signin');
    return;
  },
};
const mutations = {
  auth_request(state) {
    state.error = null;
    state.status = 'loading';
  },
  auth_success(state, token, user) {
    state.token = token;
    state.status = 'success';
    state.loggedin = true;
    state.error = null;
    localStorage.setItem('loggedinST', JSON.stringify(state.loggedin)); // OR
    state.user = JSON.parse(localStorage.getItem('user') || 'false');
    // localStorage.setItem('user', user); // OR
    console.log('lgd in');
    console.log(state.loggedin);
    console.log(user);
  },
  auth_error(state, err) {
    state.error = err.response.data; //err.response.data.msg;
  },
  register_request(state) {
    state.error = null;
    state.status = 'loading';
  },

  register_success(state) {
    state.error = null;
    state.status = 'success';
  },
  register_error(state, err) {
    state.error = err.response.data; //err.response.data.msg;
  },
  logout(state) {
    state.error = null;
    state.status = '';
    state.token = '';
    state.user = '';
    state.loggedin = false;
    localStorage.removeItem('loggedinST');
    localStorage.removeItem('user');
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
