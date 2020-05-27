<template>
  <div class="back">
    <div class="profilebanner"></div>
    <div class="wrapper">
      <div class="profilesidebar">
        <div class="profileavatar">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/115/acc35c141355.56719419ddc61.jpg"
            alt=""
          />
        </div>
        <!-- <br /> -->
        <h2>Gustav Willeit</h2>
        <!-- <br /> -->
        <a class="site" href="https://www.google.com/"
          >https://www.google.com/</a
        >
        <a class="location" href="https://www.google.com/"
          ><i class="fas fa-map-marker-alt"></i> Corvara in Badia - Corvara,
          Italy</a
        >
        <br />
        <div class="buttongroup">
          <button class="follow">Follow</button>
          <button class="message">Message</button>
        </div>
        <br />
        <div class="loadmore" @click="expandProfile">EXPAND</div>
        <div class="expandedcontent">
          <div class="stats">
            <ul>
              <li>
                <p>Project Views</p>
                <p>600k</p>
              </li>
              <li>
                <p>Appreciations</p>
                <p>53k</p>
              </li>
              <li>
                <p>Followers</p>
                <p>15k</p>
              </li>
              <li>
                <p>Following</p>
                <p>560</p>
              </li>
            </ul>
          </div>

          <br />
          <span class="abouttitle">ABOUT</span>
          <p class="aboutbody">
            Born in Brunico and grew up in Corvara, Alta Badia, Italy. He
            studied at the F+F School for Art and Design in Zurich, Switzerland,
            acquiring the technical skills, which support his innate poetic
            vision of the world. He has been assisting various photographers.
            Now he works as a freelancer.
          </p>
          <br />
          <span class="membersince">Member Since: January 5, 2010</span>
          <br />
          <a class="report" href="">Report</a>
        </div>
      </div>
      <div class="profilecontents">
        <div class="featureslist"></div>
        <ul class="profiletab">
          <!-- <li>Info</li> -->
          <li>Work</li>
          <li>Moodboards</li>
          <li>Appreciations</li>
          <!-- <div class="gradient"></div> -->
        </ul>
        <div class="projectcontainer">
          <!-- <Projects
            v-for="group in groupSize"
            v-bind:key="group.id"
            :ind="group"
            :elmPerGroup="elmPerGroup"
          /> -->
          <ProfileProjects :projects="allProjects" />
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
import ProfileProjects from '../components/home/sections/ProfileProjects.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: mapGetters(['user', 'allProjects']),
  data: () => ({
    containerElm: null,
  }),
  components: {
    ProfileProjects,
    // Projects,
  },
  methods: {
    ...mapActions(['getProfile']),
    expandProfile() {
      document.querySelector('.expandedcontent').style.display = 'block';
      document.querySelector('.loadmore').style.display = 'none';
    },
  },
  created() {
    console.log('getprofile');
    this.getProfile();
    // this.containerElm = 'x'; //document.querySelector('.projectcontainer');
    // console.log(this.getProfile());
    // console.log(this.user.name);
  },
};
</script>

<style scoped>
@media only screen and (max-width: 900px) {
  .wrapper {
    grid-template-columns: 1fr !important;
    display: block !important;
    padding: 1em !important;
  }
  .expandedcontent {
    display: none;
  }
  .loadmore {
    display: block !important;
  }
  .profilesidebar {
    max-width: 360px;
    width: 100% !important;
    margin: auto;
  }
  .projectcontainer {
    max-width: 360px;
    margin: auto;
  }
  .profiletab {
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 360px;
  }
  .featureslist {
    display: none;
  }
}
.loadmore {
  display: none;
}
ul.profiletab li:nth-child(1) {
  margin-left: 0px;
}
ul.profiletab {
  /* background-color: cadetblue; */
  display: flex;
  padding: 0em;
  margin: 1em 0em 1em 0em;
  cursor: pointer;
}

ul.profiletab li:hover {
  color: black;
  /* font-weight: 600; */
  /* box-shadow: black 1px 1px 1px 1px; */
}
ul.profiletab li {
  display: block;
  margin: 0em 1em 0em 1em;
  color: darkgray;
}
.featureslist {
  width: 100%;
  height: 100px;
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

.stats {
  width: 100%;
}
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
.follow,
.message {
  height: 3em;
  border-radius: 10em;
  font-weight: 700;
  cursor: pointer;
  line-height: -10px;
}
.follow {
  border: 0px;
  color: white;
  background-color: #0057ff;
}
.message {
  border: 2px solid lightgray;
  color: gray;
  background-color: white;
}

h2 {
  margin: 1em 1em 0.45em 1em;
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
a:visited {
  color: gray;
}
/* .profileavatar { */
/* padding-top: 2em; */
/* } */
.profileavatar img {
  border-radius: 100%;
  display: flex;
  justify-content: center;
}
.back {
  background-color: #f9f9f9;
}
.profilebanner {
  background-color: gray;
  height: 210px;
  background-image: url('https://mir-cdn.behance.net/v1/assets//d515730e0002971f9a471796124e173f/2e164fbf-b738-4d40-a4b5-a743cd4603a4_rwc_-4x129x8688x824x8688.jpg?h=0053ccc04ba49215c55236a24fcc6c39');
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
  box-shadow: #00000069 0px 2px 8px -3px;
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
