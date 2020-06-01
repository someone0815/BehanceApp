<template>
  <div>
    <!-- <h3>work</h3> -->
    <ProfileProjects :projects="allProjects" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProfileProjects from '../views/ProfileProjects.vue';

export default {
  computed: mapGetters(['allProjects']),
  components: {
    ProfileProjects
    // Projects,
  }
};
</script>

<style>
</style>