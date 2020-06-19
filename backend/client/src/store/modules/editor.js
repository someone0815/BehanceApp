const state = {
  content: [],
  updating: '',
  content_error: null,
};
const getters = {
  content_error: (state) => state.content_error,
  content: (state) => state.content,
};
const actions = {
  async addContent({ commit }, content) {
    commit('new_content', content);
  },

  async updateUrl({ commit }, content) {
    commit('update_url', content);
  },
  async updateHTML({ commit }, content) {
    commit('update_html', content);
  },
};

const mutations = {
  new_content(state, content) {
    // let config = {
    //   insertedAtIndex: content.i,
    //   type: content.c.type,
    //   id: content.c.id,
    //   url: '',
    // };
    state.content.splice(content.i + 1, 0, content.c);
    console.log(state.content);
  },
  // newImage(state, elem) {
  //   console.log(state);
  //   console.log(elem);
  // },
  update_url(state, elem) {
    console.log('elem');
    console.log(elem);
    state.content[elem.stateIndex].url = elem.url;
    state.updating = elem;
  },
  update_html(state, elem) {
    // console.log('elem');
    // console.log(elem);
    state.content[elem.stateIndex].json = elem.json;
    state.updating = elem;
  },

  content_error(state, err) {
    state.content_error = err.response.data;
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
