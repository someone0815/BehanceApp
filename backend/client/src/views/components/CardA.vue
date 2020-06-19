<template>
  <div class="card">
    <div class="cover"
         @mouseenter="show = index"
         @mouseleave="show = null">
      <div class="img-holder"><img class="thumb"
             :src="project.thumbnail" /></div>
      <div :class="[show == index ? 'gradient' : '']"
           class="backdrop visible"></div>
      <div class="txt-holder">
        <span class="visible"
              :class="[show == index ? 'is-hover' : '']">{{
            project.title
          }}</span>
      </div>
    </div>
    <div class="subcover">
      <div class="multiple"
           v-if="Object.keys(project.involved).length > 0">
        <a>Multiple Owners </a><i class="fas fa-caret-down"></i>
      </div>
      <div class="author"
           v-else>
        <!-- project.profileimg -->
        <a href="">{{ project.submitter}} </a>
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
</template>

<script>
export default {
  name: 'CardA',
  data: () => ({
    show: null
  }),

  created() {
    // this.limit = 35;
    // console.log(this.index);
  },
  props: {
    project: Object,
    index: Number
  }
};
</script>

<style scoped>
@media only screen and (max-width: 605px) {
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
  font-weight: bold;
  font-size: 13px;
  line-height: 1.3;
  -webkit-box-flex: 1;
  flex: 1;
  max-width: calc(404px - 130px);
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.multiple {
  font-weight: bold;
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
}

.author a {
  position: relative;
  top: -5px;
  margin-left: 4px;
  /* font-size: 13px; */
  font-weight: bold;
  background-color: #f9f9f9;
  color: #2b2b2b;
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
  color: #696969;
  margin-top: -4px;
}
.social span {
  padding-left: 4px;
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