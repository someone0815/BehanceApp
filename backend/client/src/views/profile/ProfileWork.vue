<template>
  <div>
    <ProfileProjects :projects="allProfileProjects" />
    <button v-if="!profile_error"
            class="link"
            @click.prevent="loadProjects">See more projects <i class="fas fa-arrow-down"></i></button>
    <Errors v-if="profile_error"
            :errorss="profile_error" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; //

import ProfileProjects from '../profile/ProfileProjects.vue';
import Errors from '../components/Error.vue';

export default {
  data: () => ({
    // index: 0
  }),
  methods: {
    ...mapActions(['getProfileProjects']),
    loadProjects() {
      this.getProfileProjects({
        username: this.username,
        amount: 4,
        index: this.projectsindex,
        type: 'profile'
      }).then(() => {
        console.log('allProfileProjects');
        console.log(this.allProfileProjects);
        console.log(Object.keys(this.allProfileProjects).length);
        // console.log(this.index);
        this.index++;
      });
    }
  },
  computed: mapGetters([
    'allProfileProjects',
    'projectsindex',
    'profile_error'
  ]),
  components: {
    Errors,
    ProfileProjects
  },
  props: {
    username: String
  },
  mounted() {
    // if (Object.keys(this.allProfileProjects).length == 0) {
    this.loadProjects();
    // }
    // this.loadProjects();
  }
};
</script>

<style>
.link {
  margin-top: 25px;
}

@media only screen and (max-width: 1400px) {
  .cardcontainer {
    grid-template-columns: 1fr 1fr !important;
  }
}
@media only screen and (max-width: 1100px) {
  .cardcontainer {
    grid-template-columns: 1fr 1fr 1fr !important;
  }
}
@media only screen and (max-width: 900px) {
  .cardcontainer {
    grid-template-columns: 1fr 1fr !important;
  }
}
/* @media only screen and (max-width: 900px) {
  .cardcontainer {
    grid-template-columns: 1fr 1fr !important;
  }
} */
@media only screen and (max-width: 550px) {
  .cardcontainer {
    grid-template-columns: 1fr !important;
  }
}
</style>