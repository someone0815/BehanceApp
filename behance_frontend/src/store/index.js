import VueX from 'vuex';
import Vue from 'vue';
import projects from './modules/projects';

Vue.use(VueX);

export default new VueX.Store({
  modules: {
    projects,
  },
});
