<template>
  <div class="home">
    <Carousel />
    <Description title="Best of Behance"
                 description="Projects featured today by our curators"
                 button="" />

    <Projects :ind="
                 1" />
    <h3>Section 1</h3>
    <Projects :ind="2" />
    <h3>Section 2</h3>
    <Projects :ind="3" />
    <h3>Section 3</h3>
    <Projects :ind="4" />
    <h3>Section 4</h3>
    <Projects :ind="5" />
  </div>
</template>

<script>
import Projects from '../components/home/sections/Projects.vue';
import Description from '../components/home/sections/Description.vue';
import Carousel from '../components/home/sections/Carousel.vue';

export default {
  name: 'Home',
  components: {
    Projects,
    Description,
    Carousel
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
