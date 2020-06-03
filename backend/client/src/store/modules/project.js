import axios from 'axios';
// import router from '../../router';

const state = {
  project: '',
};
const getters = {
  // error: (state) => state.error,
};
const actions = {
  async getProject({ commit }, projectid) {
    commit('project_request');
    try {
      let res = await axios.get(
        `http://192.168.2.104:5000/api/project/${projectid}`
      );
      commit('project', res.data.project);
      return res;
    } catch (err) {
      commit('project_error', err);
      return err;
    }
  },
};

const mutations = {
  project(state, project) {
    // state.user = user;
    state.status = 'success';
    state.project = project;
  },
  project_request(state) {
    state.error = null;
    state.status = 'loading';
  },
  project_error(state, err) {
    state.error = err.response.data; //err.response.data.msg;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
