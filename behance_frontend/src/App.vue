<template>
  <div id="app">

    <Navbar />
    <div class="container">
      <Projects :start="0"
                :limit="lim" />
    </div>
    <div class="container">
      <h3>Section 1</h3>
    </div>
    <div class="container">
      <Projects :start="lim"
                :limit="lim*2" />
    </div>
    <div class="container">
      <h3>Section 2</h3>
    </div>
    <div class="container">
      <Projects :start="lim*2"
                :limit="lim*3" />
    </div>
    <div class="container">
      <h3>Section 3</h3>
    </div>
    <div class="container">
      <Projects :start="lim*3"
                :limit="lim*4" />
    </div>
    <div class="container">
      <h3>Section 4</h3>
    </div>
    <div class="container">
      <Projects :start="lim*4"
                :limit="lim*5" />
    </div>
  </div>
</template>

<script>
import Projects from './components/Projects.vue';
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Projects
  },
  created() {
    window.addEventListener('resize', this.ColumnCalc);
    this.ColumnCalc();
  },
  destroyed() {
    window.removeEventListener('resize', this.ColumnCalc);
  },
  props: {
    lim: Number
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

<style>
body {
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  line-height: 1.6;
  background: white;
  letter-spacing: 0.02rem;
  margin: 0px;
}
.container {
  /* max-width: 1600px; */
  padding: 1.25em;
  margin: auto;
  overflow: auto;
  /* padding: 1em; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cont {
  width: 700px;
  height: 900px;
  background: gray;
  display: block;
  position: absolute;
}
</style>
