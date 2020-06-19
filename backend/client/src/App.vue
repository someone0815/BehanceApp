<template>
  <div id="app">
    <Navbar />

    <router-view />
    <!-- <router-view name="a"
                 paramsid="5edb0966bfcba65018c45b34"
                 class="proj" /> -->
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import Navbar from '../src/views/components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  created() {},
  destroyed() {},
  computed: {}
};
</script>

<style>
.proj {
  position: fixed;
  top: 0px;
  z-index: 900;
  /* background-color: transparent; */
  height: 100%;
  overflow-y: scroll;
}
i.fas.fa-arrow-down {
  top: 1px;
  position: relative;
  margin-left: 5px;
}
button.link {
  background-color: transparent;
  font-weight: 600;
  border: 0px;
  color: #0057ff;
  width: 100%;
  /* margin: auto; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  cursor: pointer;
  padding: 10px;
}

.btn:hover {
  /* filter: brightness(75%); */
  background-color: #003ecb;
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
  padding: 7px 25px 8px;
  text-shadow: none;
  transition-duration: 100ms;
  text-decoration: none;
  transition-property: background, color, border;
  transition-timing-function: linear;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 13px;
}
html {
  background-color: #f9f9f9;
}
body {
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  line-height: 1.6;
  background: white;
  letter-spacing: 0.02rem;
  margin: 0px;
}
.br {
  width: 1em;
  height: 1em;
  display: block;
}
.container {
  /* max-width: 1600px; */
  padding: 1.25em;
  margin: auto;
  overflow: auto;
  /* padding: 1em; */
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 100;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-thin.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-thin.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 100;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-thin-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-thin-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 200;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-extra-light.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-extra-light.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 200;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-extra-light-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-extra-light-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 300;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-light.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-light.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 300;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-light-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-light-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 400;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 400;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 600;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-semibold.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-semibold.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 600;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-semibold-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-semibold-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 800;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-bold.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-bold.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 800;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-bold-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-bold-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: normal;
  font-weight: 900;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-black.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-black.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro';
  font-style: italic;
  font-weight: 900;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-black-italic.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminPro/acumin-black-italic.woff')
      format('woff');
}
@font-face {
  font-family: 'acumin-pro-wide';
  font-style: normal;
  font-weight: 400;
  src: url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminProWide/acumin-wide-regular.woff2')
      format('woff2'),
    url('https://a5.behance.net/8f48dba3136c6e2a73a11e4af1614f6a2178c76c/fonts/AcuminProWide/acumin-wide-regular.woff')
      format('woff');
}
</style>
