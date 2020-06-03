<template>
  <div class="card">
    <div class="cover"
         @mouseenter="hoverEnter(index)"
         @mouseleave="show = null">
      <div class="img-holder">
        <img class="thumb"
             :src="project.thumbnail" />
      </div>
      <div :class="[show == index ? 'gradient' : '']"
           class="backdrop visible"></div>
      <div class="txt-holder visible"
           :class="[show == index ? 'is-hover' : '']">
        <span class="visible">{{ project.title }}</span>
        <br />
        <div class="multiple"
             v-if="Object.keys(project.owners).length > 1">

          <a>Multiple Owners </a><i class="fas fa-caret-down"></i>
        </div>
        <div class="author"
             v-else>
          <a href="">{{ allProfileProjects.ownersInfo[0].name }} </a>
        </div>

        <div class="social">
          <i class="fas fa-thumbs-up"></i>
          <span class="likes">{{
            new Intl.NumberFormat().format(project.social.apperciations)
          }}</span>
          <i class="fas fa-eye"></i>
          <span class="views">{{
            new Intl.NumberFormat().format(project.social.projectviews)
          }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="subcover"></div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'CardA',
  data: () => ({
    show: null
  }),
  methods: {
    hoverEnter(index) {
      this.show = index;
      // console.log(index);
    }
  },
  created() {
    // this.limit = 35;
    // console.log(this.show);
    // console.log(this.ownerInfo);
  },
  computed: mapGetters(['allProfileProjects']),
  props: {
    project: Object,
    index: Number
  }
};
</script>

<style scoped>
@media only screen and (max-width: 450px) {
  .visible {
    color: white;
    display: inline-block !important;
    opacity: 1 !important;
  }
}
div {
  transition: opacity 0.2s ease;
}
span {
  transition: color 0.2s ease;
}

.holder {
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  justify-self: center;
}

.thumb {
  width: 100%;
}
.holder {
  width: -webkit-fill-available;
}
.card {
  /* max-height: 404px; */
  /* min-width: 145px; */
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
  border-radius: 4px;
  overflow: auto;
}
.img-holder {
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* overflow: hidden !important; */
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
  /* font-weight: bold; */
  font-size: 13px;
  line-height: 1.3;
  -webkit-box-flex: 1;
  flex: 1;
  max-width: calc(404px - 130px);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  position: relative;
  top: 4px;
}
.multiple {
  font-weight: 300;
  font-size: 13px;
  line-height: 1.3;
  margin-top: 2px;
  -webkit-box-flex: 1;
  flex: 1;
  max-width: calc(404px - 130px);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
  position: relative;
  color: white;
  top: 4px;
}

.multiple a {
  color: white;
}

.author a {
  position: relative;
  /* top: -5px; */
  /* margin-left: 4px; */
  /* font-size: 13px; */
  font-weight: 300;
  /* background-color: #f9f9f9; */
  color: white;
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 13px;
  line-height: 1.3;
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
  color: white;
  float: right;
}
.social span {
  padding-left: 4px;
  /* font-weight: bold; */
  font-size: 12px;
  cursor: default;
  cursor: pointer;
  /* font-weight: 300; */
}
.social i {
  font-size: 13px;
  padding-left: 15px;
}
.txt-holder {
  position: absolute;
  bottom: 5px;
  margin: 0px 15px 5px 15px;
  color: white;
  font-weight: bold;
  width: -webkit-fill-available;
  width: -moz-available;
  opacity: 0;
}
.is-hover {
  /* color: red !important; */
  opacity: 1;
}
.backdrop {
  position: absolute;
  bottom: 0px;
  height: 40%;
  width: 100%;
  /* margin: 0px 15px 5px 15px; */
  color: transparent;
  font-weight: bold;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 50%,
    rgba(0, 0, 0, 0.93) 100%
  );
  opacity: 0;
}
.gradient {
  opacity: 1;
}
</style>
