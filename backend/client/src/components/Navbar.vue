<template>
  <div class="nav-holder">
    <div class="logo">
      <div class="ham-menu invisible">
        <div class="item-holder ">
          <a class="item "><i class="fas fa-bars"></i></a>
        </div>
      </div>
      <a href="/discover"
         class="primary-logo">
        <Logo />
      </a>
    </div>
    <div class="centered-options visible">
      <router-link to="/discover">
        <div class="item-holder ">
          <a class="item">Discover</a>
        </div>
      </router-link>
      <div class="item-holder"><a class="item">Live</a></div>
      <div class="item-holder"><a class="item">Jobs</a></div>
      <router-link to="/about">
        <div class="item-holder"><a class="item">About</a></div>
      </router-link>

      <div class="socialgroup"
           v-if="!isLoggedIn">
        <a href=""
           class="btn mail"><span>Sign Up With Email</span></a>
        <div class="item-holder"><a class="or">or</a></div>
        <a href=""
           class="btn apple"> </a>
        <a href=""
           class="btn facebook"></a>
        <a href=""
           class="btn google"></a>
      </div>
    </div>
    <div class="login">
      <div class="search">
        <div class="item-holder">
          <a class="item "><i class="fas fa-search"></i></a>
        </div>
      </div>
      <div class="signin visible">
        <router-link to="/signin"
                     v-if="!isLoggedIn">
          <div class="item-holder"><a class="item">Sign In</a></div>
        </router-link>
        <router-link :to="{ path: '/profile/' + user.username + '/work' }"
                     v-if="isLoggedIn">
          <div class="item-holder"><a class="item">Profile</a></div>
        </router-link>
        <router-link to="/logout"
                     v-if="isLoggedIn">
          <div class="item-holder">
            <a class="item"
               @click.prevent="logoutUser">Logout</a>
          </div>
        </router-link>
      </div>
      <div class="weblink visible"
           v-if="!isLoggedIn">
        <div class="item-holder ">
          <a class="item "><i class="fab fa-adobe"></i>Adobe</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../assets/logo.vue';
import { mapGetters, mapActions } from 'vuex';

// const applelogo = require('@/src/assets/apple-256.png');
// require applelogo from ;
export default {
  data: () => ({
    username: ''
  }),
  computed: {
    ...mapGetters(['user', 'isLoggedIn'])
  },
  components: {
    Logo
  },
  methods: {
    ...mapActions(['logout']),
    mounted() {
      console.log('user');
      this.username = this.user.username;
      console.log(this.username);
    },
    logoutUser() {
      console.log('loggingout');
      this.logout();
    }
  }
};
</script>

<style scoped>
@media only screen and (max-width: 1060px) {
  .visible {
    display: none !important;
  }
  .invisible {
    display: inline-block !important;
  }
}
.socialgroup {
  display: contents;
}
.ham-menu {
  display: none;
}
.ham-menu i {
  font-size: 1.25em;
}
a {
  transition: all 0.3s;
  text-decoration: none;
}
.login {
  display: flex;
}
.weblink i {
  margin-right: 10px;
  transform: scale(1.4);
}
.centered-options {
  /* position: sticky; */
  position: absolute;
  width: 100%;
  display: flex;
  height: 60px;
  justify-content: center;
  box-sizing: border-box;
  /* margin: 0% 50% 0% 50%; */
  /* align-self: flex-end; */
  margin: 0px 0px 0px -1.25em;
}
.btn {
  min-width: 34px;
  background-color: #0057ff;
  background-image: none;
  border: 1px solid transparent;
  border-radius: 50px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: block;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.25;
  padding: 7px 15px 8px;
  text-shadow: none;
  transition-duration: 300ms;
  text-decoration: none;
  transition-property: background, color, border;
  transition-timing-function: linear;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 13px;
}
.mail:hover {
  background-color: #003ecb;
}
.apple {
  background: white;
  background-position: 50% 40%;
  background-size: 56%;
  background-repeat: no-repeat;
  background-image: url('../assets/apple-256.png');
  margin-right: 0;
}
.facebook {
  background: #3b5998;
  background-position: center;
  background-size: 27%;
  background-repeat: no-repeat;
  background-image: url('../assets/facebook-256.png');
  margin-right: 0;
}
.google {
  background: white;
  background-position: center;
  background-size: 54%;
  background-repeat: no-repeat;
  background-image: url('../assets/google-256.png');
  margin-left: 0.7em;
}
.apple:hover,
.facebook:hover,
.google:hover {
  /* background-color: initial; */
  transition: opacity 0.3s;
  opacity: 0.8;
  /* filter: brightness(80%); */
}

.or {
  color: #959595;
  font-weight: bold;
  font-size: 13px;
}
.item {
  color: #959595;
  text-decoration: none;
  box-sizing: border-box;
  padding: 10px 12px;
  font-family: inherit;
  font-size: 15px;
  display: block;
  font-weight: bold;
  cursor: pointer;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  /* pointer-events: none; */
  z-index: 2;
  letter-spacing: -0.3px;
}
.item:hover {
  color: white;
  cursor: pointer;
}
.item-holder {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* display: -webkit-inline-box; */
  display: -ms-inline-flexbox;
  display: inline-flex;
  height: 60px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  vertical-align: top;
}
.router-link-active div a {
  color: white;
}
.nav-holder {
  z-index: 30;
  display: flex;
  top: 0px;
  width: 100%;
  background: #191919;
  height: 60px;
  box-sizing: border-box;
  padding: 0em 1.25em 0em 1.25em;
  flex-wrap: wrap;
  justify-content: space-between;
  position: sticky;
  /* z-index: 1; */
  /* backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.85); */
}
.logo {
  /* border: 1px #ccc solid; */
  /* padding: 10px; */
  /* flex-basis: 12%; */
  /* width: 130px; */
  z-index: 3;
  /* align-items: center; */
  /* display: -webkit-inline-box; */
  display: inline-flex;
  /* height: 60px; */
  /* justify-content: center; */
  /* position: relative; */
  /* vertical-align: top; */
}
.logo a {
  /* top: 5px; */
  /* position: relative; */
  /* bottom: 0.2em; */
  /* height: inherit; */
  display: flex;
  /* justify-content: center; */
  /* align-content: center; */
}
</style>
