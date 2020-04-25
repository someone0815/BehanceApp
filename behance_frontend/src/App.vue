<template>
  <div id="app">
    <Navbar />

    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  },
  created() {
    // window.addEventListener('resize', this.ColumnCalc);
    // this.ColumnCalc();
  },
  destroyed() {
    // window.removeEventListener('resize', this.ColumnCalc);
  }
  // props: {
  //   lim: Number
  // }
  // methods: {
  //   getWidth() {
  //     return screen.width;
  //   },
  //   ColumnCalc() {
  //     let w = window.innerWidth;
  //     let num = 0;
  //     switch (true) {
  //       case w > 2130:
  //         num = 18;
  //         break;
  //       case w > 1725:
  //         num = 15;
  //         break;
  //       case w > 1300:
  //         num = 12;
  //         break;
  //       case w > 875:
  //         num = 9;
  //         break;
  //       case w > 605:
  //         num = 6;
  //         break;
  //       default:
  //         num = 3;
  //         break;
  //     }
  //     this.lim = num;
  //   }
  // }
};
</script>

<style>
body {
  font-family: 'acumin-pro', 'Acumin Pro', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  line-height: 1.6;
  background: white;
  letter-spacing: 0.02rem;
  margin: 0px;
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
