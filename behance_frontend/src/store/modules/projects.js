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
      id: 3,
      title: 'Swimming',
      author: ['Charlie Davis'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/2fdfdb1903549.5a92fd6288ee1.jpg',
      likes: 201,
      views: 887,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/cd7e4e95762745.Y3JvcCwzNTA4LDI3NDMsMCwxNTg5.jpg',
    },
    {
      id: 4,
      title: 'Various Illustrations 5',
      author: ['Tayfun Pekdemir'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/2b55002048231.5b68f08061303.jpg',
      likes: 463,
      views: 2835,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/114d3991662323.Y3JvcCw5ODYsNzcxLDEwNCwxOTU.jpg',
    },
    {
      id: 5,
      title: 'The Lost Rainforest. Rumis Riddle.',
      author: ['Emilia Dziubak'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/673818260636.5548dca5768a4.jpg',
      likes: 440,
      views: 3206,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/218a4c95714827.Y3JvcCw5OTksNzgyLDAsNDE1.jpg',
    },
    {
      id: 6,
      title: 'Lamborghini Aventador SVJ Roadster',
      author: ['Philipp Rupprecht'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/4862e51519755.5acc890511746.jpg',
      likes: 409,
      views: 4687,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c03fc395740045.Y3JvcCwyMDQ2LDE2MDEsMTc3LDA.jpg',
    },
    {
      id: 7,
      title: 'THE GREAT HACK',
      author: ['Ash Thorp'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/d6b2566053747.5a82277be81e0.jpg',
      likes: 92,
      views: 293,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/0a5b0f95850921.Y3JvcCw4MjIsNjQzLDE4OSw0.jpg',
    },
    {
      id: 8,
      title: 'Flyby',
      author: ['x', 'x'],
      profileimg: 'x',
      likes: 1344,
      views: 13910,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/a4fd2866414289.Y3JvcCw5MzAsNzI4LDIzNCww.jpg',
    },
    {
      id: 9,
      title: 'Nike Air Max 97 - Evolution',
      author: ['x', 'x'],
      profileimg: 'x',
      likes: 750,
      views: 4934,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/01c5d992438249.Y3JvcCwxMjMxLDk2MywyNjgsNTE.jpg',
    },
    {
      id: 10,
      title: 'Zänä Alquimia',
      author: ['Diana Mo'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/7859a0448204869.5dc8ecfe432e6.png',
      likes: 514,
      views: 1779,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/33a73994901649.Y3JvcCw3NDEsNTgwLDIzOCw4MDc.png',
    },
    {
      id: 11,
      title: 'Nike x Off-White Poster (Spoof) | Nike Air Presto',
      author: ['Nick Arley'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/44579310393339.5bfa4cc88a96a.jpg',
      likes: 850,
      views: 12940,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/3938d668877275.Y3JvcCwzMDAwLDIzNDYsMCwzMjY.jpg',
    },
    {
      id: 12,
      title: 'Pacific Northwest Wonders',
      author: ['Kai Yan'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/43db97474502515.5e1e73d6d88a2.jpg',
      likes: 655,
      views: 2950,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/25f1e391504749.Y3JvcCwxMzUzLDEwNTgsMCw1NTI.jpg',
    },
    {
      id: 13,
      title: 'Expression Wall',
      author: ['Red Paper Heart .'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/b8e028642909.5ad65c08d3f7e.jpg',
      likes: 288,
      views: 1580,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/b4fb8894749307.Y3JvcCwxMzgwLDEwODAsMjcwLDA.jpg',
    },
    {
      id: 14,
      title: 'Take Back The Street',
      author: ['Astro Circo Studio'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/2ae366258821115.5c6379379a260.jpg',
      likes: 213,
      views: 1484,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/d168ae78775493.Y3JvcCw4MDgsNjMyLDAsMA.jpg',
    },
    {
      id: 15,
      title: '68 LENGUAS',
      author: ['x', 'x'],
      profileimg: 'x',
      likes: 708,
      views: 2306,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/78d67c95341143.Y3JvcCwxMTkyLDkzMywxNTYsMA.jpg',
    },
    {
      id: 16,
      title: 'LDT Builder',
      author: ['urfd .'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/52d4d0363357.5a995724e4614.jpg',
      likes: 1074,
      views: 9454,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/13e68363192361.Y3JvcCwxMTU5LDkwNiwyMzgsMA.jpg',
    },
    {
      id: 17,
      title: 'Stories from Delhi',
      author: ['Ashraful Arefin'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/f37dac9978121.55f979577e5b4.jpg',
      likes: 590,
      views: 3176,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/7f319695778349.Y3JvcCwxMjAwLDkzOCwwLDU0Ng.jpg',
    },
    {
      id: 18,
      title: 'Dutch Rebels',
      author: ['Claire Droppert'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/8e45151217345.5b0ba89e43118.jpg',
      likes: 589,
      views: 5030,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/2d245693833401.Y3JvcCwxNzA0LDEzMzMsNzUsMA.jpg',
    },
    {
      id: 19,
      title: 'ILLUSIVE ILLUSTRATIONS ON IPAD PRO',
      author: ['Samy Halim'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/2869aa152623.5dee7b491f0e5.png',
      likes: 1068,
      views: 9754,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c87aef95512923.Y3JvcCwzNzg0LDI5NjAsMTc3LDU5MA.jpg',
    },
    {
      id: 20,
      title: 'FARMLAND',
      author: ['Mitchell Rouse'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/ab2ad9153938825.5aeb7d1f931f6.jpg',
      likes: 743,
      views: 6322,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/76a09685569223.Y3JvcCwxODUzLDE0NDksNjgsMTI4.jpg',
    },
    {
      id: 21,
      title: 'Catalogo Fidaty Esselunga',
      author: ['Riccardo Guasco'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/236435.53d7e6f44e8ee.jpg',
      likes: 1170,
      views: 6124,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/9cc3e095505823.Y3JvcCwxMTEzLDg3MSwxNDMsMA.jpg',
    },
    {
      id: 22,
      title: 'Places Id Love To Live In',
      author: ['Darya Shnykina'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/e16c1339062223.5d42c10148ac8.jpg',
      likes: 1442,
      views: 6354,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/2a67ff94778855.Y3JvcCwyNTU2LDIwMDAsMjQwLDA.jpg',
    },
    {
      id: 23,
      title: 'image-face(model)',
      author: ['GyoBeom AN'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/98bb615261779.5b37310a1ec3c.jpg',
      likes: 638,
      views: 4314,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/8d14fd95402245.5e991f7508dae.jpg',
    },
    {
      id: 24,
      title: 'New and old Prints 2020',
      author: ['Mattias Adolfsson'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/82688.53ab2829ef484.jpg',
      likes: 784,
      views: 4395,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c3801c95407179.Y3JvcCw0MDQsMzE2LDE1Niw3MTg.jpg',
    },
    {
      id: 25,
      title: 'The Abrolhos Islands',
      author: ['Kevin Krautgartner'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/349162661930.56f3b80c76596.jpg',
      likes: 456,
      views: 3995,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/77c2ca95293675.Y3JvcCw4NjIsNjc1LDE5LDA.jpg',
    },
    {
      id: 26,
      title: 'Mexican Drawings #3',
      author: ['Mateo Pizarro'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/705199846135.574aa45112d85.jpg',
      likes: 1210,
      views: 8423,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/c02bce95280255.Y3JvcCwzNjQxLDI4NDgsNTQsMA.jpg',
    },
    {
      id: 27,
      title: 'Elsewhere',
      author: ['x', 'x'],
      profileimg: 'x',
      likes: 1532,
      views: 10432,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/db228494766821.Y3JvcCwxNDU4LDExNDAsMTY2LDY4.jpg',
    },
    {
      id: 28,
      title: 'Climb on Triglav / Slovenia',
      author: ['Daniel Ernst'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/0c243087241057.5e8c88b63c2a2.jpg',
      likes: 927,
      views: 8453,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/d6769669980621.Y3JvcCwxNjY4LDEzMDQsNjg1LDU4Mg.jpg',
    },
    {
      id: 29,
      title: 'Sports Graphics',
      author: ['Denis Gonchar'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/6eaed8107441.5c4065036a4ce.jpg',
      likes: 935,
      views: 12854,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/7a09b492047429.Y3JvcCw5NDAsNzM1LDY5LDQ1OA.jpg',
    },
    {
      id: 30,
      title: 'Astrologia',
      author: ['Mathieu L.B'],
      profileimg:
        'https://mir-s3-cdn-cf.behance.net/user/50/ce8b639882393.5e8e65e80c433.png',
      likes: 3345,
      views: 18964,
      thumbnail:
        'https://mir-s3-cdn-cf.behance.net/projects/404/1c177e95151959.Y3JvcCwxODAwLDE0MDcsMCwxOTY.jpg',
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
