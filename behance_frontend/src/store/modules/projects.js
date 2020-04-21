// import axios from 'axios';

const state = {
  projects: [
    {
      id: 0,
      title: 'CLÍNICA DO SITE — Website Illustrations',
      author: ['Adamastor Studio'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/84603866307545.597735bb964e7.png',
      likes: 269,
      views: 1375,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c8573295115495.Y3JvcCwyMDczLDE2MjIsNjc3LDc4MA.png',
    },
    {
      id: 1,
      title: 'Selected Recent Works',
      author: ['Yulong Lli', 'Cristobal Ojeda Newfren'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/61e8d118087433.5c00081228205.jpg',
      likes: 554,
      views: 4001,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/3d681e95474111.Y3JvcCwxMjAwLDkzOCwwLDM3MQ.jpg',
    },
    {
      id: 2,
      title: 'Fan Arts and personal illustrations',
      author: ['Cristobal Ojeda Newfren'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/9531db709198.5e86a6961423e.png',
      likes: 890,
      views: 5054,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/3eae0a95376075.Y3JvcCwxNDAwLDEwOTUsMCwxMDc.png',
    },
    {
      id: 2,
      title: 'Fan Arts and personal illustrations',
      author: ['Cristobal Ojeda Newfren'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/9531db709198.5e86a6961423e.png',
      likes: 890,
      views: 5054,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/3eae0a95376075.Y3JvcCwxNDAwLDEwOTUsMCwxMDc.png',
    },
  ],
};

const getters = {
  allProjects: (state) => state.projects,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
