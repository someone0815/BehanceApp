import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/modules/auth';

Vue.use(Router);

// const routes = [];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresGuest: false,
        requiresAuth: false,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
      meta: {
        requiresGuest: false,
        requiresAuth: false,
      },
    },
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/Signin.vue'),
      meta: {
        requiresGuest: true,
        requiresAuth: false,
      },
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      meta: {
        requiresGuest: false,
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log(`Requires Authentication : ${to.meta.requiresAuth}`);
  console.log(
    `Requires Being a Guest : ${to.matched.some(
      (record) => record.meta.requiresGuest
    )}`
  );
  console.log(`User is logged in : ${store.state['loggedin']}`);
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !store.state['loggedin']
  ) {
    console.log('requires auth and logged in');
    console.log(store.getters.isLoggedIn);
    next({ name: 'Signin' });
  } else {
    next();
  }
  if (
    to.matched.some((record) => record.meta.requiresGuest) &&
    store.state['loggedin']
  ) {
    console.log('requires guest and logged out');
    console.log(store.getters.isLoggedIn);
    next({ name: 'Profile' });
  } else {
    next();
  }
});

export default router;
