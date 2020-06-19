const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const CommentSchema = new mongoose.Schema({
//   commentUser: {
//     type: String,
//   },
//   text: {
//     type: String,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
const SocialSchema = new mongoose.Schema({
  projectviews: {
    type: Number,
    default: 0,
  },
  apperciations: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
});

// Create the User Schema
const ProjectSchema = mongoose.Schema({
  // profile: [ProfileSchema],
  mature: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
    default: 'title',
  },
  thumbnail: {
    type: String,
    required: true,
    default: 'thumbnailurl',
  },
  content: {
    type: String,
    required: true,
    default: 'content',
  },
  submitter: {
    type: String,
    required: true,
    default: 'notfound',
  },
  involved: {
    type: Array,
    required: true,
    default: [],
  },
  tools: {
    type: Array,
    required: true,
    default: [],
  },
  categories: {
    type: Array,
    required: true,
    default: ['illustration'],
  },
  tags: {
    type: Array,
    required: true,
    default: ['poster design'],
  },
  social: { type: SocialSchema, default: () => ({}) },
  // comments: { type: CommentSchema, default: () => ({}) },
  comments: {
    type: Array,
    comment: [
      {
        commentUser: {
          type: String,
        },
        text: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  owners: {
    type: Array,
    default: [001],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Project = mongoose.model('projects', ProjectSchema);
