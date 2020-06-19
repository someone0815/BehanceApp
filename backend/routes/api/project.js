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
  // passport.authenticate('jwt', { session: false }),
  (req, res) => {
    //
    //
    const getSubmitter = async (param) => {
      return new Promise((resolve, reject) => {
        User.find({ username: param })
          .select('name username profile.profileimg profile.location')
          .exec((err, submitter) => {
            resolve(submitter[0]);
            return submitter[0];
          });
      });
    };

    function getInvolvedInfo(involvedUser) {
      return new Promise((resolve, reject) => {
        User.find({ username: involvedUser })
          .select('name username profile.profileimg profile.location')
          .exec((err, fetchedUser) => {
            if (!(fetchedUser.length > 0)) {
              reject(`Involved User Info not found ${involvedUser}`);
              return;
            }
            resolve(fetchedUser[0]);
          });
      });
    }

    const getInvolved = async (involvedRaw) => {
      let involved = [];
      await Promise.all(
        involvedRaw.map(async (involvedUser) => {
          let info = await getInvolvedInfo(involvedUser).then((user) => {
            involved.push(user);
          });
        })
        // involvedRaw.map(async (involvedUser) => {
        //   let info = await getInvolvedInfo(involvedUser)
        //     .then((user) => {
        //       involved.push(user);
        //     })
        //     .catch((err) => console.log(err));
        // })
      );
      return involved;
    };

    Project.findOne(
      { _id: req.params.projectid }
      // { comments: { $slice: [0, 5] } }
      // { $sort: { 'comments.date': -1 } }
    ).then((project) => {
      if (project) {
        async function response() {
          let submitter = await getSubmitter(project.submitter);
          let involved = await getInvolved(project.involved);
          // console.log(involved);
          return res.status(200).json({
            project: {
              title: project.title,
              thumbnail: project.thumbnail,
              content: project.content,
              tools: project.tools,
              tags: project.tags,
              categories: project.categories,
              social: project.social,
              date: project.date,
              mature: project.mature,
              involved: involved,
              submitter: submitter,
            },
            success: true,
          });
        }
        response();
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
