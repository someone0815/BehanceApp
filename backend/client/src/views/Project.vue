<template>
  <div>
    <div class="notfound"
         v-if="notfound">
      <h1>404</h1>
      <br />{{ $route.params.id }} not found
    </div>
    <div v-else
         class="back">
      <div v-if="dataLoaded"
           class="wrapper">
        <div class="holder">
          <div class="header">
            <img v-bind:src="project.ownersInfo[0].profile.profileimg"
                 alt="">
            <div class="profile">
              <span class="title">{{project.title}}</span>
              <div class="subline"><a class="author">{{project.ownersInfo[0].name}}</a><span class="seperator"> &#8203; • &#8203; </span><a>Follow</a></div>

            </div>
          </div>
          <div class="content">
            <div class="img"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f34ae95081319.5e98a37b1dc3d.jpg"
                   alt=""></div>
            <div class="txt">
              <h4>Task: to develop a label design for the traditional czech absinth. </h4>
              <span> It's not a secret that the Czech Republic is famous as an absinth producing country. Plenty of tourists are coming here every year to try different kinds of mystical beverage. Prague, the capital of the Czech Republic, is famous for a medieval astronomical clock, called Orloj. The clock was first installed in 1410, making it the third-oldest astronomical clock in the world.
                <br>
                Last year two alcohol producers decided to collaborate and craft a new high-quality edition of the absinth. They took a traditional Czech absinth recipe, combined it with the symbol of the capital and new astronomical absinth, called "Orloj", has appeared. It was decided to craft two editions of the beverage: classic (macerated) and golden (distilled) one. My task was to create a product logo, label design and basic visual identity of the product.</span>
            </div>
            <div class="img"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/13969295081319.5e8ed67634f47.jpg"
                   alt=""></div>
          </div>
          <div class="socials"></div>
          <div class="reel"></div>
        </div>
        <!-- <h3>{{$route.params.id}}</h3>
        <p>{{project.title}}</p>
        <p>{{project.thumbnail}}</p>
        <p>{{project.content}}</p>
        <p>{{project.tools}}</p>
        <p>Projectviews {{project.social.projectviews}}</p>
        <p>Apprecitations {{project.social.apperciations}}</p>
        <p>Comments {{project.social.comments}}</p>
        <p>Owner {{project.owners}}</p> -->
      </div>

    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['error']),
  methods: {
    ...mapActions(['getProject'])
  },
  data: () => ({
    notfound: false,
    dataLoaded: false,
    project: false
  }),
  mounted() {
    console.log('getprofile');
    this.getProject(this.$route.params.id).then(res => {
      // console.log('res');
      // console.log(this.error);
      if (this.error != null) {
        console.log('res');
        console.log(this.error);
        console.log(this.error.errors[0].msg);
        this.notfound = true; //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // this.getProjectAuthors(this)
        return;
      }
      // console.log(this.project.ownersInfo);
      // if (this.project.ownersInfo == undefined) {
      //   this.project.ownersInfo == 'hi';
      // }
      this.dataLoaded = true;
      this.project = res.data.project;
      console.log(res.data.project);

      // console.log(this.$refs.banner);
      // this.$refs.banner.style.backgroundImage = `url('${this.visitingprofile.profile.profilebanner}')`;
    });

    // const myElement = document.getElementById('banner')[0];
    // console.log(this.$refs.grid);
    // console.log(myElement);
  }
};
</script>

<style scoped>
/* .img {
  background-image: url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/1f34ae95081319.5e98a37b1dc3d.jpg');
} */
.reel {
  height: 300px;
  background-color: #191919;
}
.socials {
  height: 300px;
  background-color: black;
}
.txt {
  max-width: 670px;
  font-size: 0.9em;
  line-height: 1.8;
  /* margin: auto; */
  padding: 25px;
  margin: 2em auto 3em auto;
}
.img {
  padding: 20px;
}
.img img {
  max-width: -webkit-fill-available;
}
.content {
  background-color: white;
  /* height: 820px; */
}
.holder {
  margin: 0px 100px 0px 100px;
}
.back {
  background-color: #f9f9f9;
}
.seperator {
  cursor: default;
}
a {
  cursor: pointer;
}
a:hover {
  text-decoration: underline;
}
.header {
  max-height: 70px;
  height: 70px;
  padding: 8px;
  display: inline-flex;
  box-sizing: border-box;
}
.wrapper {
  max-width: 1200px;
  /* padding: 0em 3em 0em 3em; */
  margin: auto;
  /* background-color: white; */
}
.header img {
  max-height: 40px;
  border-radius: 100%;
  width: auto;
  height: auto;
  align-self: center;
}
.profile {
  /* display: grid; */
  /* justify-content: flex-start; */
  padding-left: 15px;
  /* max-height: 50px; */
  /* box-sizing: border-box; */
  /* height: auto; */
  /* display: flex; */
  /* box-sizing: border-box; */
  align-self: center;
}

span.title {
  font-size: 0.9em;
  font-weight: bold;
  align-self: flex-end;
  /* padding-bottom: 10px; */
  /* line-height: 1.9; */
  cursor: default;
}

.subline {
  font-size: 0.8em;
  line-height: 1.9;
}

span.title {
  font-size: 0.9em;
  font-weight: bold;
}
.subline {
  font-size: 0.8em;
}
.notfound {
  text-align: center;
  font-size: 1em;
  margin: auto;
}

h1 {
  text-align: center;
  font-size: 10em;
  margin: 0px;
}
</style>