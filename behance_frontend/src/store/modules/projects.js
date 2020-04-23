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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
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
      id: 14,
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
      id: 15,
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
      id: 16,
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
      id: 17,
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
      id: 18,
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
      id: 19,
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
      id: 20,
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
      id: 21,
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
      id: 22,
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
      id: 23,
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
      id: 24,
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
      id: 25,
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
      id: 26,
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
      id: 27,
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
      id: 28,
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
      id: 29,
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
      id: 30,
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
      id: 31,
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
      id: 32,
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
      id: 33,
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
      id: 34,
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
      id: 35,
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
      id: 36,
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
      id: 37,
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
      id: 38,
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
      id: 39,
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
      id: 40,
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
      id: 41,
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
      id: 42,
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
      id: 43,
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
      id: 44,
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
      id: 45,
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
      id: 46,
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
      id: 47,
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
      id: 48,
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
      id: 49,
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
      id: 50,
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
      id: 51,
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
      id: 52,
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
      id: 53,
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
      id: 54,
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
      id: 55,
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
      id: 56,
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
      id: 57,
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
      id: 58,
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
      id: 59,
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
      id: 60,
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
      id: 61,
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
      id: 62,
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
