<template>
  <div>
    <ProfileProjects :projects="allProfileProjects.projects" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; //

import ProfileProjects from '../views/ProfileProjects.vue';

export default {
  methods: {
    ...mapActions(['getProfileProjects'])
  },
  computed: mapGetters(['allProfileProjects']),
  components: {
    ProfileProjects
  },
  mounted() {
    this.getProfileProjects(this.$route.params.id).then(() => {
      console.log('allProfileProjects');
      console.log(this.allProfileProjects);
    });
  }
};
</script>

<style>
</style>