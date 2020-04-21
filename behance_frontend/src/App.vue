<template>
  <div id="app">
    <div class="container">
      <Projects />
    </div>
  </div>
</template>

<script>
import Projects from './components/Projects.vue';

export default {
  name: 'App',
  components: {
    Projects
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
}
.container {
  max-width: 1250px;
  margin: auto;
  overflow: auto;
  padding: 1em;
  overflow: hidden;
}
</style>
