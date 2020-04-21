<template>
  <div class="wrapper">
    <div v-for="(project, index) in allProjects"
         v-bind:key="project.id"
         class="card">
      <div class="cover"
           @mouseenter="show = index"
           @mouseleave="show = null">
        <div class="img-holder"><img class="thumb"
               :src="project.thumbnail" /></div>
        <div :class="[show == index ? 'gradient' : '']"
             class="backdrop"></div>
        <div class="txt-holder">
          <span :class="[show == index ? 'is-hover' : '']">{{
            project.title
          }}</span>
        </div>
      </div>
      <div class="subcover">
        <div class="multiple"
             v-if="Object.keys(project.author).length > 1">
          <a>Multiple Owners </a><i class="fas fa-caret-down"></i>
        </div>
        <div class="author"
             v-else>
          <img :src="project.profileimg" />
          <a href="">{{ project.author[0] }} </a>
        </div>
        <div class="social">
          <i class="fas fa-thumbs-up"></i>
          <span class="likes">{{
            new Intl.NumberFormat().format(project.likes)
          }}</span>
          <i class="fas fa-eye"></i>
          <span class="views">{{
            new Intl.NumberFormat().format(project.views)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Projects',
  data: () => ({
    show: null
  }),
  computed: mapGetters(['allProjects'])
};
</script>

<style scoped>
div {
  transition: opacity 0.2s ease;
}
span {
  transition: color 0.2s ease;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
  grid-auto-rows: minmax(100px, auto);
}

@media only screen and (max-width: 880px) {
  .wrapper {
    grid-template-columns: 1fr 1fr;
  }
}
@media only screen and (max-width: 460px) {
  .wrapper {
    grid-template-columns: 1fr;
  }
}
.card {
  max-height: 404px;
  min-width: 145px;
  width: auto;
  background: white;
}
.cover {
  position: relative;
  box-sizing: border-box;
  display: block;
  /* padding-top: 78.22%; */
  position: relative;
  width: 100%;
  cursor: pointer;
}
.img-holder {
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden !important;
}
.subcover {
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  /* min-height: 45px; */
  padding-bottom: 10px;
  padding-top: 10px;
}
.subcover img {
  border-radius: 100%;
  height: 20px;
  width: 20px;
}
.author {
  font-weight: bold;

  font-size: 13px;
  line-height: 1.3;
}
.multiple {
  font-weight: bold;
  font-size: 13px;
  line-height: 1.3;
  margin-top: 2px;
}

.author a {
  position: relative;
  top: -4px;
  margin-left: 4px;
}
a {
  color: #191919;
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.social {
  color: #696969;
  margin-top: -2px;
}
.social span {
  padding-left: 8px;
  font-weight: bold;
  font-size: 12px;
  cursor: default;
}
.social i {
  font-size: 13px;
  padding-left: 15px;
}
.txt-holder {
  position: absolute;
  bottom: 5px;
  margin: 0px 15px 5px 15px;
  color: transparent;
  font-weight: bold;
}
.is-hover {
  color: white;
}
.backdrop {
  position: absolute;
  bottom: 0px;
  height: 25%;
  width: 100%;
  /* margin: 0px 15px 5px 15px; */
  color: transparent;
  font-weight: bold;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
}
.gradient {
  opacity: 1;
}
</style>
