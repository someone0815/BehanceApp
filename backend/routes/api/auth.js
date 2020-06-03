const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const key = require('../../config/keys').secret;
const User = require('../../model/User');
const Project = require('../../model/Project');
// const request = require('request');
// Secret Key
// const secretKey = '6LewOvwUAAAAAFdNqS9-701c_LYEbwLZ_wMBBVS2';
const captcha = require('../captcha');

// /**
//  *@route POST api/users/register
//  *@desc Register the User
//  *@access Public
//  */
router.post(
  '/register',
  [check('email').isEmail(), check('password').isLength({ min: 8 })],
  (req, res) => {
    if (captcha.check(req, res)) {
      let { name, username, email, password, confirm_password } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (password !== confirm_password) {
        return res.status(400).json({
          errors: {
            0: {
              msg: 'Passwords error.',
              param: 'Passwords do not match.',
            },
          },
        });
      }
      // Check for the unique User
      User.findOne({ username: username }).then((user) => {
        if (user) {
          return res.status(400).json({
            errors: {
              0: {
                msg: 'Username is already taken. ',
                param: 'Choose another one.',
              },
            },
          });
        }
      });
      // Check for the unique Email
      User.findOne({ email: email }).then((user) => {
        if (user) {
          return res.status(400).json({
            errors: {
              0: {
                msg: 'Email is already registered. ',
                param: 'Did you forgot your password?',
              },
            },
          });
        }
      });
      // That data is valid and now we can register the user
      let newUser = new User({
        // profile: {
        //   profileimg,
        //   location,
        //   projectviews,
        //   apperciations,
        //   followers,
        //   following,
        //   bio,
        // },
        name,
        username,
        password,
        email,
      });
      // Hash password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          if (!err) {
            newUser.save().then((user) => {
              return res.status(200).json({
                success: true,
                msg: 'User is now registered.',
              });
            });
          }
        });
      });
    }
  }
);

/**
 *@route POST api/users/login
 *@desc Signing the User
 *@access Public
 */
router.post('/login', (req, res) => {
  if (captcha.check(req, res)) {
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        return res.status(404).json({
          errors: {
            0: {
              msg: 'User not found.',
              param: 'Did you enter correctly?',
            },
          },
          success: false,
        });
      }
      // If there is user we are not going to compare the password
      bcrypt.compare(req.body.password, user.password).then((isMatch) => {
        if (isMatch) {
          setTimeout(function () {
            const payload = {
              _id: user._id,
              username: user.username,
              name: user.name,
              email: user.email,
            };
            jwt.sign(payload, key, { expiresIn: 604800 }, (err, token) => {
              res.status(200).json({
                success: true,
                token: `Bearer ${token}`,

                user: payload, // instead of useruser
                msg: 'You are now logged in.',
              });
            });
          }, 2500);
          // Users password is correct and we need to send the JSON Token for that user
        } else {
          return res.status(404).json({
            errors: {
              0: {
                msg: 'Incorrect password.',
                param: 'Try again.',
              },
            },
            success: false,
          });
        }
      });
    });
  }
});

// /**
//  *@route POST api/users/profile
//  *@desc Return the Users Data
//  *@access Public
//  */
// router.get(
//   '/profile/projects/:username',
//   // passport.authenticate('jwt', { session: false }),
//   (req, res) => {
//     User.findOne({ username: req.params.username }).then((user) => {
//       if (user) {
//         return res.status(200).json({
//           title: user,
//         });
//         Project.find({ username: 'takemasa' })
//           // .select('title')
//           // .where('username')
//           // .equals('req.params.username')
//           .exec((err, projects) => {
//             return res.status(200).json({
//               title: projects,
//             });
//             // return res.status(200).json({
//             //   user: {
//             //     name: user.name,
//             //     email: user.email,
//             //     uername: user.username,
//             //     profile: user.profile,
//             //   },
//             //   success: true,
//             // });
//           });
//       } else {
//         return res.status(404).json({
//           errors: {
//             0: {
//               msg: 'User not found.',
//               param: 'Check url.',
//             },
//           },
//           success: false,
//         });
//       }
//     });
//     // return res.json({
//     //   user: req.user,
//     // });
//   }
// );

module.exports = router;
