const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  tools: {
    type: Array,
    required: true,
    default: ['photoshop'],
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
