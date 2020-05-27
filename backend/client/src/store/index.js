import VueX from 'vuex';
import Vue from 'vue';
import VueRecaptcha from 'vue-grecaptcha';
import projects from './modules/projects';
import auth from './modules/auth';

Vue.use(VueX);

export default new VueX.Store({
  modules: {
    projects,
    auth,
  },
});

Vue.use(VueRecaptcha, {
  sitekey: '6LewOvwUAAAAAI-HnAE4R1EaHCcjE0d1lrLMhJzH',
});
