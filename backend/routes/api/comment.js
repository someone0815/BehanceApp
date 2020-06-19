const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');
const Project = require('../../model/Project');
const Comment = require('../../model/Comment');

router.get('/:postID&:amount&:index', (req, res) => {
  // Comment.create({
  //   postID: '5edb0966bfcba65018c45b34',
  //   body: 'Nice!2',
  //   author: 'jayjon3',
  // }).then((user) => {
  //   console.log('new post');
  // });

  function getCommentInfo(comment) {
    return new Promise((resolve, reject) => {
      User.find({ username: comment.author })
        .select('name username profile.profileimg')
        .exec((err, fetchedComment) => {
          if (!(fetchedComment.length > 0)) {
            reject(`Commenter Info not found ${comment.authors}`);
            return;
          }
          let commentInfo = {
            commentUser: {
              name: fetchedComment[0].name,
              username: fetchedComment[0].username,
              profileimg: fetchedComment[0].profile.profileimg,
            },
            text: comment.body,
            date: comment.date,
          };
          resolve(commentInfo);
        });
    });
  }

  const getComments = async (rawComments) => {
    let comments = [];
    await Promise.all(
      rawComments.map(async (commentMeta) => {
        let info = await getCommentInfo(commentMeta)
          .then((comment) => {
            comments.push(comment);
          })
          .catch((err) => console.log(err));
      })
    );
    return comments;
  };

  Comment.find({ postID: req.params.postID })
    .sort({ date: -1 })
    .limit(parseInt(req.params.amount))
    .skip(parseInt(req.params.amount) * Math.max(0, parseInt(req.params.index)))
    // .select('title owners social thumbnail')
    .then((raw) => {
      async function response() {
        let comments = await getComments(raw);
        return res.status(200).json({
          comments: comments,
          success: true,
        });
      }
      response();
    });
});
module.exports = router;
