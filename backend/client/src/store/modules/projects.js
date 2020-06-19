import axios from 'axios';

const state = {
  projects: [],
  fontpageindex: 0,
};

const getters = {
  allProjects: (state) => state.projects,
  fontpageindex: (state) => state.fontpageindex,
};

const actions = {
  async getProjects({ commit }, params) {
    commit('projects_request');
    try {
      let res = await axios.get(
        `http://192.168.2.104:5000/api/frontpage/${params.amount}&${params.index}`
      );
      commit('projects', { data: res.data, caller: params.type });

      return res;
    } catch (err) {
      commit('projects_error', err);
      return err;
    }
  },
};

const mutations = {
  projects_error(state, err) {
    state.projects_error = err.response; //err.response.data.msg;
  },
  projects_request(state) {
    state.status = 'loading';
  },
  projects(state, params) {
    state.status = 'success';
    // if (params.caller == 'profile') {
    // state.projects = params.data.projects;
    params.data.projects.forEach(function(project) {
      state.projects.push(project);
    });
    state.fontpageindex++;
    // } else {
    // params.data.projects.forEach(function(project) {
    //   state.projects.push(project);
    // });
    // state.projectsowners = params.data.ownersInfo;
    // state.fontpageindex++;
    // }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
