const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../../model/User');
const Project = require('../../model/Project');

/**
 *@route GET api/frontpage/amount&index
 *@desc Returns projects for /discover
 *@access Public
 */
router.get('/:amount&:index', (req, res) => {
  Project.find({})
    .sort({ _id: -1 })
    .limit(parseInt(req.params.amount))
    .skip(parseInt(req.params.amount) * Math.max(0, parseInt(req.params.index)))
    .select('title submitter involved social thumbnail')
    .exec((err, project) => {
      if (project) {
        console.log('object');
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
});

module.exports = router;
