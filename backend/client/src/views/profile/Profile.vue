<template>
  <div class="back">
    <!-- <h2>User {{ $route.params.id }}</h2> -->
    <!-- <h2>User {{ user.name }}</h2> -->
    <div class="profilebanner"
         v-if="!notfound"
         ref="banner"></div>
    <div class="notfound"
         v-if="notfound">
      <h1>404</h1>
      <br />{{ $route.params.id }} not found
    </div>
    <div class="wrapper"
         v-if="dataLoaded">
      <div class="profilesidebar">
        <div class="profileavatar">
          <img :src="visitingprofile.profile.profileimg" />
          <div class="addprofileimg"
               v-if="userIsProfileOwner"><i class="fas fa-plus addprofileimage"></i></div>
        </div>
        <!-- <br /> -->
        <h2>{{ visitingprofile.name }}</h2>
        <!-- <br /> -->
        <a class="profession">{{ visitingprofile.profile.profession }}</a>
        <a class="site"
           href="https://www.google.com/">takemasa.com</a><!-- {{ visitingprofile.email }} -->
        <a class="location"
           href="https://www.google.com/"><i class="fas fa-map-marker-alt"></i>
          {{ visitingprofile.profile.location }}</a>
        <!-- <br /> -->
        <div class="br"></div>
        <div class="buttongroup"
             v-if="!userIsProfileOwner">
          <button class="button follow">Follow</button>
          <button class="button message">Message</button>
        </div>
        <!-- <div class="buttongroup logged" -->
        <!-- > -->
        <button class="button edit"
                v-else>Edit Your Profile</button>
        <!-- </div> -->
        <div class="br"></div>
        <div class="br"></div>
        <div class="loadmore"
             @click="expandProfile">EXPAND</div>
        <div class="expandedcontent">
          <div class="stats">
            <ul>
              <li>
                <p>Project Views</p>
                <p>{{ visitingprofile.profile.projectviews }}</p>
              </li>
              <li>
                <p>Appreciations</p>
                <p>{{ visitingprofile.profile.apperciations }}</p>
              </li>
              <li>
                <p>Followers</p>
                <p>{{ visitingprofile.profile.followerscount }}</p>
              </li>
              <li>
                <p>Following</p>
                <p>{{ visitingprofile.profile.followingcount }}</p>
              </li>
            </ul>
          </div>
          <div class="br"></div>
          <span class="abouttitle">ABOUT</span>
          <p class="aboutbody">
            {{ visitingprofile.profile.bio }}
          </p>

          <br />
          <span class="membersince">Member Since: January 5, 2010</span>
          <br />
          <a class="report"
             href="">Report</a>
        </div>
      </div>
      <div class="profilecontents">

        <div class="featureslist"
             v-if="Object.keys(visitingprofile.profile.features).length > 0">
          <!-- <span v-for="feature in visitingprofile.profile.features"
                :key="feature.type">
            {{feature.type}}
          </span> -->
        </div>
        <div class="profiletab">
          <!-- <li>Info</li> -->
          <router-link class="stats"
                       :to="{ path: '/profile/' + $route.params.id + '/work' }">
            <a class="item">Work</a>
          </router-link>
          <router-link class="stats"
                       :to="{ path: '/profile/' + $route.params.id + '/moodboards' }">
            <a class="item">Moodboards</a>
          </router-link>
          <router-link class="stats"
                       :to="{ path: '/profile/' + $route.params.id + '/appreciations' }">
            <a class="item">Appreciations</a>
          </router-link>
          <router-link class="stats"
                       v-if="userIsProfileOwner"
                       :to="{ path: '/profile/' + $route.params.id + '/insights' }">
            <a class="item">Insights</a>
          </router-link>
          <!-- <li>Work</li> -->
          <!-- <li>Moodboards</li> -->
          <!-- <li>Appreciations</li> -->
          <!-- <div class="gradient"></div> -->
        </div>
        <div class="projectcontainer">
          <router-view :username="$route.params.id" />
          <!-- <Projects
            v-for="group in groupSize"
            v-bind:key="group.id"
            :ind="group"
            :elmPerGroup="elmPerGroup"
          /> -->
        </div>
      </div>
    </div>
    <!-- <h3>Profile</h3> -->
    <!-- <div v-if="user">
      <ul>
        <li>Email: {{user.email}}</li>
        <li>Username: {{user.username}}</li>
        <li>Name: {{user.name}}</li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters([
    'user',
    'error',
    'profile_error',
    'visitingprofile',
    'allProjects'
  ]),
  data: () => ({
    containerElm: null,
    dataLoaded: false,
    notfound: false,
    userIsProfileOwner: false
  }),
  components: {
    // ProfileProjects
    // Projects,
  },
  methods: {
    ...mapActions(['getProfile']),
    expandProfile() {
      document.querySelector('.expandedcontent').style.display = 'block';
      document.querySelector('.loadmore').style.visibility = 'hidden ';
      document.querySelector('.loadmore').style.position = 'absolute';
      // console.log(document.querySelector('.profilebanner'));
    }
  },
  mounted() {
    console.log('getprofile');
    this.getProfile(this.$route.params.id).then(() => {
      // console.log('res');
      // console.log(this.profile_error);
      if (this.profile_error != null) {
        // console.log('res');
        console.log(this.profile_error);
        console.log(this.profile_error.errors[0].msg);
        this.notfound = true;
        return;
      }
      this.dataLoaded = true;
      // console.log(this.$refs.banner);
      this.$refs.banner.style.backgroundImage = `url('${this.visitingprofile.profile.profilebanner}')`;
      console.log('user');
      console.log(this.user.username);
      console.log('visitingprofile');
      console.log(this.visitingprofile);
      if (this.user.username == this.visitingprofile.username) {
        this.userIsProfileOwner = true;
        console.log('is User');
      }
    });

    // const myElement = document.getElementById('banner')[0];
    // console.log(this.$refs.grid);
    // console.log(myElement);
  },
  created() {
    // this.containerElm = 'x'; //document.querySelector('.projectcontainer');
    // console.log(this.getProfile());
    // console.log(this.user.name);
  }
};
</script>

<style scoped>
i.fas.fa-plus {
  color: white;
}
.addprofileimg {
  float: right;
  background-color: #0057ff;
  /* position: relative; */
  /* bottom: 10px; */
  border-radius: 100%;
  width: 30px;
  position: relative;
  top: -30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid white;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .profilesidebar {
    padding: 0px !important;
  }
}

@media only screen and (max-width: 1100px) {
  .wrapper {
    grid-template-columns: 1fr 1fr !important;
    display: block !important;
    padding: 1em !important;
  }
  .expandedcontent {
    display: none;
    width: 100%;
  }
  .loadmore {
    display: block !important;
    /* visibility: none; */
  }
  .profilesidebar {
    max-width: 360px;
    width: 100% !important;
    margin: auto;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  /* .profileavatar { */
  /* border: 10px solid #f9f9f9;
    border-radius: 100%; */
  /* } */

  .profiletab {
    margin-top: 25px;
    margin-left: auto !important;
    margin-right: auto !important;
    display: grid;
    text-align-last: center;
    justify-content: center;
  }
  div.profiletab > a.stats:nth-child(1) > a {
    margin-left: 0px !important;
  }
  .featureslist {
    display: none;
  }
  .profilecontents {
    position: relative;
    top: -5em;
  }
}
.profiletab {
  margin-top: 25px;
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

.expandedcontent {
  width: 100%;
}
.loadmore {
  display: none;
  visibility: visible;
  padding: 1em;
  cursor: pointer;
  font-weight: bold;
  color: gray;
}
.loadmore:hover {
  color: black;
}
div.profiletab > a.stats:nth-child(1) > a {
  margin-left: -0.95em;
}

a.item:hover {
  color: black;
  /* font-weight: 600; */
  /* box-shadow: black 1px 1px 1px 1px; */
}
a.item {
  display: inline-block;
  /* margin: 0em 1em 0em 1em; */
  /* color: darkgray; */
  cursor: pointer;

  padding: 0.85em;
}
.featureslist {
  width: 100%;
  height: 75px;
  /* background-color: #656565; */
}
.report {
  text-decoration: none;
  font-size: 0.75em;
  color: gray;
}
.membersince {
  text-transform: uppercase;
  font-size: 0.75em;
  color: gray;
}
.abouttitle {
  font-weight: 800;
  font-size: 0.75em;
  align-self: baseline;
}
.aboutbody {
  font-size: 0.85em;
  color: #585858;
}

.router-link-active a {
  font-weight: bold;
  color: black !important;
}

/* .stats { */
/* width: 100%; */
/* } */
.stats ul {
  margin: 0px;
  padding: 0px;
  width: -webkit-fill-available;
}
.stats li {
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: -webkit-fill-available;
}
.stats li p:nth-child(1) {
  padding-top: 6px;
  color: gray;
  box-sizing: border-box;
  font-size: 0.9em;
}
.stats li p:nth-child(2) {
  color: #313131;
  text-align: right;
  font-size: 1.3em;
}
.stats li p {
  margin: 0px;
}
.buttongroup {
  display: grid;
  gap: 1em;
  grid-template-columns: 1fr 1fr;
  width: 100%;
}
.button {
  height: 3em;
  border-radius: 10em;
  font-weight: 700;
  cursor: pointer;
  line-height: -10px;
  border: 0px;
  color: white;
  background-color: #0057ff;
}

/* .message {
} */
.edit {
  width: -webkit-fill-available;
  width: -moz-available;
}
.message {
  border: 2px solid lightgray;
  color: gray;
  background-color: white;
}

h2 {
  margin: 0em 1em 0.45em 1em;
  text-align: center;
}
.site {
  margin: 0em 1em 0.8em 1em;
}
.location {
  text-decoration: none;
  font-size: 0.89em;
}
.location i {
  font-size: 0.8em;
  position: relative;
  bottom: 2px;
}
a,
a:visited {
  color: gray;
}
/* .profileavatar { */
/* padding-top: 2em; */
/* } */
.profileavatar img {
  max-height: 115px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  border: 10px solid #f9f9f9;
  border-radius: 100%;
}
.back {
  background-color: #f9f9f9;
}
.profilebanner {
  background-color: gray;
  height: 210px;
  /* background-image: url('https://mir-cdn.behance.net/v1/assets//d515730e0002971f9a471796124e173f/2e164fbf-b738-4d40-a4b5-a743cd4603a4_rwc_-4x129x8688x824x8688.jpg?h=0053ccc04ba49215c55236a24fcc6c39'); */
  background-position: center center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */
  background-size: cover;
}
.profilesidebar {
  width: 360px;
  height: fit-content;
  padding: 2em;
  box-sizing: border-box;
  background-color: white;
  /* box-shadow: #00000069 0px 2px 8px -3px; */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-self: start;
  top: -5em;
  position: relative;
}
.profilecontents {
  /* background-color: gray; */
  width: auto;
  height: auto;
  /* display: inline-block; */
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 10fr;
  /* grid-auto-rows: minmax(100px, auto); */
  gap: 3em;
  margin: auto;
  max-width: 1600px;
  padding: 0em 3em 0em 3em;
}
</style>
