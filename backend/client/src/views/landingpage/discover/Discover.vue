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
    <button class="btn"
            @click.prevent="loadProjects">Loadmore</button>
    <!-- <button>Load More</button> -->
    <!-- <Projects v-for="projects in allProjects"
              v-bind:key="projects.id"
              :ind="1" /> -->
  </div>
</template>

<script>
import Projects from '../discover/sections/Projects.vue';
import Description from '../discover/sections/Description.vue';
import Carousel from '../discover/sections/Carousel.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',

  computed: mapGetters(['allProjects', 'fontpageindex']),
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
    // this.ColumnCalc();
    // this.loadProjects();
  },
  destroyed() {
    window.removeEventListener('resize', this.ColumnCalc);
  },
  mounted() {
    if (Object.keys(this.allProjects).length == 0) {
      this.loadProjects();
    }
    // this.loadProjects();
  },
  methods: {
    ...mapActions(['getProjects']),
    loadProjects() {
      this.getProjects({
        amount: 24,
        index: this.fontpageindex,
        type: 'profile'
      }).then(() => {
        this.ColumnCalc();
        // console.log('allProjects');
        // console.log(this.allProjects);
        // console.log(Object.keys(this.allProjects).length);
        // console.log(this.fontpageindex);
        // this.fontpageindex++;
      });
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
      this.elmPerGroup = num;
      this.groupSize =
        Math.round(Object.keys(this.allProjects).length / this.elmPerGroup) + 1;

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
