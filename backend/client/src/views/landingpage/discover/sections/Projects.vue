<template>
  <div class="container">
    <div class="wrapper">
      <CardA v-for="(project, index) in allProjects.slice(elmPerGroup *  (ind-1),elmPerGroup * ind )"
             v-bind:key="index"
             v-bind:project="project"
             v-bind:index="index" />
      <div class="section">
        <h3>Section {{ind}}</h3>
      </div>

    </div>
  </div>
</template>

<script>
import CardA from '../../../components/CardA.vue';
// import CardB from './CardB.vue';

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
    // CardB
  }
};
</script>

<style scoped>
.section {
  background-color: #f2f2f2;
  grid-column: 1/7;
  grid-auto-rows: minmax(488px, auto);
  min-height: 250px;
  /* column-gap: 0em; */
  /* left: -1em; */
  margin: -1.25em;
  position: relative;
}
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
  .section {
    grid-column: 1/6;
  }
}

@media only screen and (max-width: 1725px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .section {
    grid-column: 1/5;
  }
}

@media only screen and (max-width: 1300px) {
  .wrapper {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .section {
    grid-column: 1/4;
  }
}

@media only screen and (max-width: 875px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
  }
  .section {
    grid-column: 1/3;
  }
}
@media only screen and (max-width: 605px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
  .section {
    grid-column: 1/2;
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
