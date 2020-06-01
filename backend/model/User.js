const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// profile: {
//   profileimg,
//   location,
//   projectviews,
//   apperciations,
//   followers,
//   following,
//   bio,
// },
// name,
// username,
// password,
// email,
const ProfileSchema = new mongoose.Schema({
  profileimg: {
    type: String,
    default: 'https://i.imgur.com/Nofmuai.png',
  },
  profilebanner: {
    type: String,
    default: 'https://i.imgur.com/cpR8osk.jpg',
  },
  profession: {
    type: String,
    default: 'Illustrator',
  },
  location: {
    type: String,
    default: 'DE',
  },
  profession: {
    type: String,
    default: 0,
  },
  projectviews: {
    type: Number,
    default: 0,
  },
  apperciations: {
    type: Number,
    default: 0,
  },
  followerscount: {
    type: Number,
    default: 0,
  },
  followers: {
    type: Array,
    default: {},
  },
  followingcount: {
    type: Number,
    default: 0,
  },
  following: {
    type: Array,
    default: {},
  },
  bio: {
    type: String,
    default: 'A fellow Behance resident.',
  },
});

// Create the User Schema
const UserSchema = mongoose.Schema({
  // profile: [ProfileSchema],
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  projectids: {
    type: Array,
    default: {},
  },

  profile: { type: ProfileSchema, default: () => ({}) },
});

module.exports = User = mongoose.model('users', UserSchema);
