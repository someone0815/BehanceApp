<template>
  <div class="container">
    <div class="wrapper">
      <CardA v-for="(project, index) in allProjects.slice(lim *  (ind-1),lim * ind )"
             v-bind:key="project.id"
             v-bind:project="project"
             v-bind:index="index" />

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
    size: Number,
    ind: Number
  },
  components: {
    CardA
  },
  data: () => ({
    lim: null
  }),
  created() {
    window.addEventListener('resize', this.ColumnCalc);
    this.ColumnCalc();
  },
  destroyed() {
    window.removeEventListener('resize', this.ColumnCalc);
  },
  methods: {
    getWidth() {
      return screen.width;
    },
    ColumnCalc() {
      let w = window.innerWidth;
      let num = 0;
      switch (true) {
        case w > 2130:
          num = 18;
          break;
        case w > 1725:
          num = 15;
          break;
        case w > 1300:
          num = 12;
          break;
        case w > 875:
          num = 9;
          break;
        case w > 605:
          num = 6;
          break;
        default:
          num = 3;
          break;
      }
      this.lim = num;
    }
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
