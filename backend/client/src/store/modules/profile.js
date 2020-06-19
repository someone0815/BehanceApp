import axios from 'axios';
// import { Router } from 'express';
// import router from '../../router';

const state = {
  // token: localStorage.getItem('token') || '',
  // user: JSON.parse(localStorage.getItem('user') || 'false'),
  visitingprofile: '',
  profile_error: null,
  profileprojects: [],
  projectsindex: 0,

  projectsowners: '',
  profileprojects_error: null,
};
const getters = {
  visitingprofile: (state) => state.visitingprofile,
  profile_error: (state) => state.profile_error,
  allProfileProjects: (state) => state.profileprojects,
  projectsindex: (state) => state.projectsindex,
  projectsowners: (state) => state.projectsowners,
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
  async getProfileProjects({ commit }, params) {
    commit('profileprojects_request');
    try {
      let res = await axios.get(
        `http://192.168.2.104:5000/api/profile/projects/${params.username}&${params.amount}&${params.index}`
      );
      // console.log('object');
      console.log(res.data.projects.length);
      if (res.data.projects.length == 0) {
        commit('nomore_profileprojects');
        console.log('nomore commit');
      }
      commit('user_profileprojects', { data: res.data, caller: params.type });

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
    state.profileprojects_error = err.response; //err.response.data.msg;
  },
  profileprojects_request(state) {
    state.status = 'loading';
  },
  nomore_profileprojects(state) {
    console.log('setstate');
    state.profile_error = {
      errors: {
        0: {
          msg: 'Thats all projects.',
          param: "You've reached the end.",
        },
      },
    };
  },
  
  user_profileprojects(state, params) {
    state.status = 'success';
    if (params.caller == 'project') {
      state.profileprojects = params.data.projects;
    } else {
      params.data.projects.forEach(function(project) {
        state.profileprojects.push(project);
      });
      state.projectsowners = params.data.ownersInfo;
      state.projectsindex++;
    }
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
