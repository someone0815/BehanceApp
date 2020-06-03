const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');
const Project = require('../../model/Project');

// /**
//  *@route POST api/users/profile
//  *@desc Return the Users Data
//  *@access Public
//  */
router.get(
  '/:projectid',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    // let title = 'newtitle';
    // let newProject = new Project({});
    // newProject.save().then((user) => {
    //   console.log('new post');
    // });
    Project.findOne({ _id: req.params.projectid }).then((project) => {
      if (project) {
        User.find()
          .select('name username profile.profileimg')
          .where('username')
          .in(project.owners)
          .exec((err, authors) => {
            if (authors.length == 0) {
              authors = {
                0: {
                  name: '[deleted]',
                  profile: {
                    profileimg: 'https://i.imgur.com/Nofmuai.png',
                  },
                  username: '[deleted]',
                },
              };
              // console.log(authors);
              console.log('notfound');
            }

            console.log('found');
            return res.status(200).json({
              project: {
                title: project.title,
                thumbnail: project.thumbnail,
                content: project.content,
                tools: project.tools,
                social: project.social,
                owners: project.owners,
                ownersInfo: authors,
              },
              success: true,
            });
          });
      } else {
        return res.status(404).json({
          errors: {
            0: {
              msg: 'Project not found.',
              param: 'Check url.',
            },
          },
          success: false,
        });
      }
    });
  }
);
module.exports = router;
