const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = mongoose.Schema({
  postID: {
    type: String,
    required: true,
    default: '5edb0966bfcba65018c45b34',
  },
  body: {
    type: String,
    required: true,
    default: 'text',
  },
  author: {
    type: String,
    required: true,
    default: 'jayjon3',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Comment = mongoose.model('comments', CommentSchema);
