<template>
  <div class="home">
    <Carousel />
    <Description title="Best of Behance"
                 description="Projects featured today by our curators"
                 button="" />

    <Projects v-for="group in groupSize"
              v-bind:key="group.id"
              :ind="group"
              :elmPerGroup="elmPerGroup" />
    <button>Load More</button>
    <!-- <Projects v-for="projects in allProjects"
              v-bind:key="projects.id"
              :ind="1" /> -->

  </div>
</template>

<script>
import Projects from '../components/home/sections/Projects.vue';
import Description from '../components/home/sections/Description.vue';
import Carousel from '../components/home/sections/Carousel.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Home',
  computed: mapGetters(['allProjects']),
  components: {
    Projects,
    Description,
    Carousel
  },
  data: () => ({
    elmPerGroup: null,
    groupSize: 0
  }),
  created() {
    window.addEventListener('resize', this.ColumnCalc);
    this.ColumnCalc();
  },
  destroyed() {
    window.removeEventListener('resize', this.ColumnCalc);
  },
  methods: {
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
      this.elmPerGroup = num;
      this.groupSize =
        Math.round(this.allProjects.length / this.elmPerGroup) + 1;

      console.log(
        `allProjects.length: ${this.allProjects.length} elm/group: ${this.elmPerGroup} requiredGroups: ${this.groupSize}`
      );
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  line-height: 1.6;
  background: white;
  letter-spacing: 0.02rem;
  margin: 0px;
}
</style>
