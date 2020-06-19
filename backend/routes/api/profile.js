const express = require('express');
// const { check, validationResult } = require('express-validator');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
// const key = require('../../config/keys').secret;
const User = require('../../model/User');
const Project = require('../../model/Project');
// const request = require('request');
// Secret Key
// const secretKey = '6LewOvwUAAAAAFdNqS9-701c_LYEbwLZ_wMBBVS2';
// const captcha = require('../captcha');
router.get(
  '/:username',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log('object');
    // console.log(req.user);
    // if (req.user.username == req.params.username) {
    //   console.log('IS USER');
    // } else {
    //   console.log('not user');
    // }
    User.findOne({ username: req.params.username }).then((user) => {
      if (user) {
        return res.status(200).json({
          user: {
            name: user.name,
            email: user.email,
            username: user.username,
            profile: user.profile,
          },
          success: true,
        });
      } else {
        return res.status(404).json({
          errors: {
            0: {
              msg: 'User not found.',
              param: 'Check url.',
            },
          },
          success: false,
        });
      }
    });
    // return res.json({
    //   user: req.user,
    // });
  }
);

// /**
//  *@route POST api/users/profile
//  *@desc Return the Users Data
//  *@access Public
//  */
router.get(
  '/projects/:username&:amount&:index',
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // console.log(req.user);
    // if (req.user.username == req.params.username) {
    //   console.log('IS USER');
    // } else {
    //   console.log('not user');
    //   // return;
    // }l
    Project.find({
      $or: [
        { submitter: req.params.username },
        { involved: req.params.username },
      ],
    })
      .limit(parseInt(req.params.amount))
      .sort({ _id: -1 })
      .skip(
        parseInt(req.params.amount) * Math.max(0, parseInt(req.params.index))
      )
      .select('title owners submitter involved social thumbnail')
      .exec((err, project) => {
        if (project) {
          User.find({ username: req.params.username })
            .select('name username profile.profileimg')
            .exec((err, owners) => {
              if (err) {
                return res.status(404).json({
                  errors: {
                    0: {
                      msg: 'Owners not found.',
                      param: err,
                    },
                  },
                  success: false,
                });
              }
              return res.status(200).json({
                projects: project,
                ownersInfo: owners,
              });
            });
        } else {
          return res.status(404).json({
            errors: {
              0: {
                msg: 'Project not found.',
                param: project,
              },
            },
            success: false,
          });
        }
      });
    // Project.findOne({ _id: req.params.projectid }).then((project) => {
    //   if (project) {
    //     User.find()
    //       .select('name username profile.profileimg')
    //       .where('username')
    //       .in(project.owners)
    //       .exec((err, authors) => {
    //         if (authors.length == 0) {
    //           authors = {
    //             0: {
    //               name: '[deleted]',
    //               profile: {
    //                 profileimg: 'https://i.imgur.com/Nofmuai.png',
    //               },
    //               username: '[deleted]',
    //             },
    //           };
    //           // console.log(authors);
    //           console.log('notfound');
    //         }
    //         console.log('found');
    //         return res.status(200).json({
    //           project: {
    //             title: project.title,
    //             thumbnail: project.thumbnail,
    //             content: project.content,
    //             tools: project.tools,
    //             social: project.social,
    //             owners: project.owners,
    //             ownersInfo: authors,
    //           },
    //           success: true,
    //         });
    //       });
    //   } else {
    //     return res.status(404).json({
    //       errors: {
    //         0: {
    //           msg: 'Project not found.',
    //           param: 'Check url.',
    //         },
    //       },
    //       success: false,
    //     });
    //   }
    // });
  }
);

module.exports = router;
