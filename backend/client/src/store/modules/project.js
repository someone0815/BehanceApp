import axios from 'axios';
// import router from '../../router';

const state = {
  project: '',
  error: null,
  comment_error: null,
  projectcomments: [],
  commentsindex: 0,
};
const getters = {
  project_error: (state) => state.error,
  project: (state) => state.project,
  allProjectComments: (state) => state.projectcomments,
  comment_error: (state) => state.comment_error,
  commentsindex: (state) => state.commentsindex,
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
  async getProjectComments({ commit }, params) {
    commit('projectcomments_request');
    try {
      let res = await axios.get(
        `http://192.168.2.104:5000/api/comment/${params.postID}&${params.amount}&${params.index}`
      );
      console.log('object');
      if (res.data.comments.length == 0) {
        commit('nomore_projectcomments');
        console.log('nomore commit');
      }
      commit('user_projectcomments', { data: res.data });

      return res;
    } catch (err) {
      commit('getprojectcomments_error', err);
      return err;
    }
  },
};

const mutations = {
  project(state, project) {
    // state.user = user;
    state.error = null;
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
  getprojectcomments_error(state, err) {
    state.comment_error = err.response; //err.response.data.msg;
  },
  projectcomments_request(state) {
    state.status = 'loading';
  },
  user_projectcomments(state, params) {
    state.status = 'success';
    params.data.comments.forEach(function(comment) {
      state.projectcomments.push(comment);
    });
    // console.log(params);
    // state.projectcomments = params.data;
    // state.projectsowners = params.data.ownersInfo;
    state.commentsindex++;
  },
  nomore_projectcomments(state) {
    console.log('setstate');
    state.comment_error = {
      errors: {
        0: {
          msg: 'Thats all comments.',
          param: "You've reached the end.",
        },
      },
    };
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
