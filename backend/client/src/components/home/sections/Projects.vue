<template>
  <div class="container">
    <div class="wrapper">
      <CardA v-for="(project, index) in allProjects.slice(elmPerGroup *  (ind-1),elmPerGroup * ind )"
             v-bind:key="project.id"
             v-bind:project="project"
             v-bind:index="index" />
      <h3>Section {{ind}}</h3>
    </div>
  </div>
</template>

<script>
import CardA from './CardA.vue';

import { mapGetters } from 'vuex';
export default {
  name: 'Projects',
  computed: mapGetters(['allProjects']),
  props: {
    ind: Number,
    elmPerGroup: Number
  },
  components: {
    CardA
  }
};
</script>

<style scoped>
.container {
  padding: 1.25em;
  margin: auto;
  overflow: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.25em;
  grid-auto-rows: minmax(100px, auto);
}
@media only screen and (max-width: 2130px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 1725px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 1300px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 875px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 605px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
  /* .holder {
    width: auto !important;
  } */
  .visible {
    color: white;
    display: inline-block !important;
    opacity: 1 !important;
  }
}
</style>
