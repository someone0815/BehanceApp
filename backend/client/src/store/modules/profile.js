import axios from 'axios';
// import { Router } from 'express';
// import router from '../../router';

const state = {
  // token: localStorage.getItem('token') || '',
  // user: JSON.parse(localStorage.getItem('user') || 'false'),
  visitingprofile: '',
  profile_error: null,
  profileprojects_error: null,
  profileprojects: {},
};
const getters = {
  visitingprofile: (state) => state.visitingprofile,
  profile_error: (state) => state.profile_error,
  allProfileProjects: (state) => state.profileprojects,
};

const actions = {
  // Get the user Profile
  async getProfile({ commit }, username) {
    commit('profile_request');
    try {
      let res = await axios.get(
        `http://192.168.2.104:5000/api/profile/${username}`
      );
      commit('user_profile', res.data.user);
      return res;
    } catch (err) {
      commit('getprofile_error', err);
      return err;
    }
  },
  async getProfileProjects({ commit }, username) {
    commit('profileprojects_request');
    try {
      let res = await axios.get(
        `http://192.168.2.104:5000/api/profile/projects/${username}`
      );
      commit('user_profileprojects', res.data);

      return res;
    } catch (err) {
      commit('getprofileprojects_error', err);
      return err;
    }
  },
};
const mutations = {
  getprofile_error(state, err) {
    state.profile_error = err.response.data; //err.response.data.msg;
  },
  profile_request(state) {
    state.status = 'loading';
  },
  user_profile(state, user) {
    // state.user = user;
    state.status = 'success';
    state.visitingprofile = user;
  },
  getprofileprojects_error(state, err) {
    state.profileprojects_error = err.response.data; //err.response.data.msg;
  },
  profileprojects_request(state) {
    state.status = 'loading';
  },
  user_profileprojects(state, projects) {
    state.status = 'success';
    state.profileprojects = projects;
    // console.log('res');
    // console.log(projects);
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
