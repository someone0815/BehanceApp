<template>
  <div id="sign">
    <div class="bg"></div>
    <div class="signcontainer">
      <router-link class="holder left"
                   to="/">
        <img class="icon"
             src="https://static.adobelogin.com/clients/bhnc_22989526-955d-49e3-9a7d-f093e8f3dbf5/4x_ae636b0f623792081b77838920fee109.png" />
        <div class="logo">Behance</div>
      </router-link>
      <div class="holder">
        <div id="signin">
          <div class="formcontainer">
            <h2>Sign in</h2>
            <p>
              <span>New User? </span>
              <a @click="showRegister">Create an account.</a>
            </p>
            <form action=""
                  @submit.prevent="loginUser">
              <Errors v-if="error"
                      :errorss="error" />
              <label class="inputlabel"
                     for="email"
                     id="login-email">Email address</label>
              <input type="text"
                     placeholder=""
                     name="email"
                     v-model="email" />
              <br />
              <label class="inputlabel"
                     for="password"
                     id="login-password">Password</label>
              <input type="password"
                     placeholder=""
                     name="password"
                     v-model="password" />
              <div id="signinanchor"></div>
              <br />
              <br />
              <input type="submit"
                     value="Continue" />

              <span v-if="authState == 'loading' && error == null"
                    class="loading"><img :src="mySVG" /> Logging in..</span>
            </form>
          </div>
        </div>
        <div id="signup">
          <div class="formcontainer">
            <h2>Sign up</h2>
            <p>Already have an account? <a @click="showLogin">Sign in.</a></p>

            <form action=""
                  @submit.prevent="registerUser">
              <Errors v-if="error"
                      :errorss="error" />
              <label for="username"
                     class="inputlabel">Username</label> <br />
              <input type="text"
                     placeholder=""
                     name="username"
                     v-model="username" />
              <br />
              <label for="name"
                     class="inputlabel">Name</label> <br />
              <input id="name"
                     type="text"
                     placeholder=""
                     name="name"
                     v-model="name" />
              <br />
              <label for="email"
                     class="inputlabel">Email</label> <br />
              <input id="email"
                     type="text"
                     placeholder=""
                     name="email"
                     v-model="email" />
              <br />
              <label for="password"
                     class="inputlabel">Password</label> <br />
              <input type="password"
                     placeholder=""
                     name="password"
                     v-model="password" />
              <br />
              <label for="confirm_password"
                     class="inputlabel">Confirm Password</label>
              <br />
              <input type="password"
                     placeholder=""
                     name="confirm_password"
                     v-model="confirm_password" />
              <br />
              <div id="signupanchor"></div>
              <br />
              <input type="submit"
                     value="Sign Up" />
            </form>
          </div>
        </div>
        <div>
          <vue-recaptcha id="recaptcha"
                         sitekey="6LewOvwUAAAAAI-HnAE4R1EaHCcjE0d1lrLMhJzH"
                         @render="render"
                         @expired="expired"></vue-recaptcha>
        </div>
      </div>
    </div>
    <div class="source">
      <img class="software"
           src="https://auth.services.adobe.com/img/attributions/Behance.svg" />
      <div class="sourcetxt">Tom Anders Wilkens</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import Register from './Register.vue';
import Errors from '../views/components/Error.vue';
import VueRecaptcha from 'vue-recaptcha';
// import vue-grecaptcha from ''

export default {
  components: {
    Errors,
    VueRecaptcha
  },
  data() {
    return {
      username: '',
      password: '',
      confirm_password: '',
      name: '',
      email: '',
      mySVG: require('../assets/loading.svg')
    };
  },
  mounted: function() {
    this.showLogin();
    // Todo: Temporary fiy => why does this dissapear when logged out
    if (document.querySelector('#g-recaptcha-response') == null) {
      // location.reload();
      // window.grecaptcha.reset(0);
      // console.log(document.querySelector('#g-recaptcha-response'));
      // this.forceRerender();
      // VueRecaptcha.reset();
      // console.log('object');
      // console.log(VueRecaptcha.reset());
    }
  },

  methods: {
    ...mapActions(['login', 'register']),
    // ...mapGetters(['authState']),
    render(id) {
      console.log(`captcha-id : ${id}`);
      if (document.querySelector('#g-recaptcha-response') == null) {
        location.reload();
      }
    },
    expired() {
      console.log('captcha expired');
    },
    showLogin() {
      document.getElementById('signup').style.visibility = 'hidden';
      document.getElementById('signup').style.display = 'none';
      document
        .querySelector('#signinanchor')
        .after(document.querySelector('#recaptcha'));
      // console.log('ok');
    },
    showRegister() {
      document.getElementById('signup').style.visibility = 'visible';
      document.getElementById('signup').style.display = 'flex';
      document
        .querySelector('#signupanchor')
        .after(document.querySelector('#recaptcha'));
    },
    loginUser() {
      let captcha = document.querySelector('#g-recaptcha-response').value;
      let user = {
        email: this.email,
        password: this.password,
        captcha: captcha
      };
      this.login(user)
        .then(res => {
          console.log('res');
          window.grecaptcha.reset(0);
          if (res.data.success) {
            this.$router
              .push(`/profile/${res.data.user.username}/work`)
              .catch(err => console.log(err));
            console.log(`Logged in successfully : ${res.data.success}`);
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    registerUser() {
      let captcha = document.querySelector('#g-recaptcha-response').value;
      console.log(captcha);
      let user = {
        username: this.username,
        password: this.password,
        confirm_password: this.confirm_password,
        email: this.email,
        name: this.name,
        captcha: captcha
      };
      this.register(user)
        .then(res => {
          console.log('resdata');
          console.log(res);
          window.grecaptcha.reset(0);
          if (res.data.success) {
            // this.$router.push('/signin');
            console.log('showlogin');
            this.showLogin();
          }
        })
        .catch(err => {
          console.log('errx');
          this.error;
          console.log(err);
        });
    }
  },
  computed: mapGetters(['authState', 'error'])
};
</script>

<style scoped>
.loading {
  font-size: 0.9em;
  display: inline-block;
  vertical-align: middle;
  display: flex;
  align-items: flex-end;
  margin: 6px 0px 0px;
  color: #1473e6;
}
img {
  max-width: 22px;
  /* float: right; */
  /* margin-right: 20px; */
  /* margin-top: 6px; */
  margin-right: 10px;
}
input[type='submit' i] {
  color: white;
  padding: 10px 15px 10px 15px;
  background-color: #1473e6;
  border: 0px;
  border-radius: 200px;
  font-size: 12px;
  font-weight: 700;
  float: right;
  cursor: pointer;
}

input[type='password'],
input[type='text'] {
  background-color: transparent !important;
  border: none;
  border-bottom: 1px solid;
  /* width: -webkit-fill-available; */
  width: 100%;
  border-color: #0000003d;
  padding: 5px;
  margin-bottom: 15px;
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
}
a {
  cursor: pointer;
  color: #0a5dd8;
}
p {
  font-size: 0.9em;
}
.inputlabel {
  color: #747474;
  font-size: 0.75em;
  font-weight: 400;
}
@media only screen and (max-height: 600px) {
  #signin,
  #signup {
    align-items: flex-start !important;
  }
  .formcontainer {
    height: auto !important;
  }
}

@media only screen and (max-width: 700px) {
  .source,
  .left {
    display: none !important;
  }
  .holder {
    margin: auto;
    /* width: 100% !important; */
    height: inherit;
  }
}
@media only screen and (max-width: 500px) {
  .holder {
    max-width: unset !important;
  }
}
#signup {
  visibility: hidden;
}

#sign {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 36;
  /* background-image: url(https://auth.services.adobe.com/img/canvas/Fotolia_118267918_XL.jpg); background-image: url(https://auth.services.adobe.com/img/canvas/Fotolia_228669299_XL.jpg); */
  background-image: url(https://auth.services.adobe.com/img/canvas/TomAndersWatkins.jpg);
  background-size: cover;
  background-position: center center;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  z-index: -1;
}
.signcontainer {
  max-width: 950px;
  /* background-color: gray; */
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.holder {
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  max-width: 430px;
  position: relative;
  overflow: auto;
}
.formcontainer {
  width: 100%;
  background-color: white;
  padding: 45px;
  box-sizing: border-box;
}
.left {
  display: flex;
  /* justify-content: flex-end; */
  padding: 20px;
  box-sizing: border-box;
  width: auto;
  height: fit-content;
  align-self: center;
  text-decoration: none;
}
.icon {
  max-height: 50px;
}
.logo {
  font-size: 2em;
  color: white;
  padding-left: 20px;
}
.source {
  position: fixed;
  color: white;
  bottom: 0px;
  width: 100%;
  display: flex;
  padding: 10px;
  padding-left: 25px;
  box-sizing: border-box;
}
.software {
  max-height: 14px;
}
.sourcetxt {
  vertical-align: middle;
  position: relative;
  bottom: 4px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
}
h2 {
  font-weight: 600;
  font-size: 1.8em;
  margin: 0px;
}
#signin,
#signup {
  position: absolute;
  width: inherit;
  /* height: -webkit-fill-available; */
  height: 100vh;
  display: flex;
  align-items: center;
}
</style>
