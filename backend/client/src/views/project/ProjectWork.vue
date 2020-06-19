<template>
  <div>
    <ProfileProjects :projects="allProfileProjects" />
    <button class="btn"
            @click.prevent="loadProjects">Load more</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; //

import ProfileProjects from '../profile/ProfileProjects.vue';

export default {
  methods: {
    ...mapActions(['getProfileProjects']),
    loadProjects() {
      this.getProfileProjects({
        username: this.username,
        amount: 4,
        index: this.projectsindex,
        type: 'profile'
      }).then(() => {
        // console.log('allProfileProjects');
        // console.log(this.allProfileProjects);
        // console.log(Object.keys(this.allProfileProjects).length);
        // console.log(this.index);
        // this.index++;
      });
    }
  },
  computed: mapGetters(['allProfileProjects', 'projectsindex']),
  components: {
    ProfileProjects
  },
  props: {
    username: String,
    prj: Object
  },
  mounted() {
    if (Object.keys(this.allProfileProjects).length == 0) {
      this.loadProjects();
    }
  }
};
</script>

<style scoped>
button.btn {
  margin: auto;
  margin-top: 25px;
}

@media only screen and (max-width: 1400px) {
  .cardcontainer {
    grid-template-columns: 1fr 1fr 1fr 1fr !important;
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
.cardcontainer {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.card {
  display: grid;
}
</style>