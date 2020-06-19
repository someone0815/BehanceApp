import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../views/landingpage/Home.vue';
import Discover from '../views/landingpage/discover/Discover.vue';
import Projects from '../views/project/Project.vue';
// component: () => import('../views/project/Project.vue'),

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
      component: Discover,
      meta: {
        requiresGuest: false,
        requiresAuth: false,
      },
    },
    {
      path: '/discover',
      name: 'Discover',
      // component: Discover,
      meta: {
        requiresGuest: false,
        requiresAuth: false,
      },
      components: {
        default: Discover,
        a: Projects,
      },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/landingpage/About.vue'),
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
      path: '/settings',
      name: 'Settings',
      component: () => import('../views/Settings.vue'),
      meta: {
        requiresGuest: false,
        requiresAuth: true,
      },
    },
    {
      path: '/editor',
      name: 'Editor',
      component: () => import('../views/editor/Editor.vue'),
      meta: {
        requiresGuest: false,
        requiresAuth: true,
      },
    },
    {
      path: '/gallery/:id',
      name: 'Project',
      // component: () => import('../views/project/Project.vue'),
      components: {
        default: Projects,
        a: Projects,
      },
      meta: {
        requiresGuest: false,
        requiresAuth: false,
      },
    },
    {
      path: '/profile/:id',
      name: 'Profile',
      component: () => import('../views/profile/Profile.vue'),
      meta: {
        requiresGuest: false,
        requiresAuth: false,
      },
      children: [
        {
          path: 'work',
          name: 'Work',
          component: () => import('../views/profile/ProfileWork.vue'),
          // props: { username: String },
          meta: {
            requiresGuest: false,
            requiresAuth: false,
          },
        },
        {
          path: 'moodboards',
          name: 'Moodboards',
          component: () => import('../views/profile/UnderConstruction.vue'),
          meta: {
            requiresGuest: false,
            requiresAuth: true,
          },
        },

        {
          path: 'appreciations',
          name: 'Appreciations',
          component: () => import('../views/profile/UnderConstruction.vue'),
          meta: {
            requiresGuest: false,
            requiresAuth: false,
          },
        },
        {
          path: 'insights',
          name: 'Insights',
          component: () => import('../views/profile/UnderConstruction.vue'),
          meta: {
            requiresGuest: false,
            requiresAuth: true,
          },
        },
      ],
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
    console.log(
      `requires guest and logged out, currently: ${store.getters.isLoggedIn}`
    );
    next({ path: '/discover' });
    // next({ name: 'Profile' });
  } else {
    next();
  }
  // if (to.path == '/settings' && to.hash == '') {
  //   next({ path: '/settings#section-2' });
  //   console.log(to);
  //   console.log('xx');
  // }
});

export default router;
