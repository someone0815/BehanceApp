<template>
  <div class="cardcontainer">
    <!-- v-bind:key="group.id" 
      v-bind:project="group"
      v-bind:index="index"
    
    
    -->
    <CardB v-for="(project, index) in projects"
           v-bind:key="project.id"
           v-bind:project="project"
           v-bind:index="index" />

  </div>
</template>

<script>
import CardB from '../components/CardB.vue';

import { mapGetters } from 'vuex';

export default {
  computed: mapGetters(['user']),
  props: {
    projects: Array
  },
  data: () => ({
    elmPerGroup: 3,
    groupSize: 0
  }),
  components: {
    CardB
  },
  methods: {
    ColumnCalc() {},
    created() {},
    destroyed() {}
  }
};
</script>

<style scoped>
.cardcontainer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;
}
</style>
