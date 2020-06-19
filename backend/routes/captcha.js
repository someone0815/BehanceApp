const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const request = require('request');
const secretKey = '6LewOvwUAAAAAFdNqS9-701c_LYEbwLZ_wMBBVS2';

module.exports = {
  check: async function (req, res) {
    if (
      req.body.captcha === undefined ||
      req.body.captcha === '' ||
      req.body.captcha === null
    ) {
      return res.status(404).json({
        errors: {
          0: {
            msg: 'Captcha error.',
            param: 'Please click Captcha box',
          },
        },
        success: false,
      });
    }

    // Verify URL
    const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`;
    // Make request to VerifyURL
    request(verifyUrl, (err, response, body) => {
      body = JSON.parse(body);
      // If not successful
      if (body.success !== undefined && !body.success) {
        return res.status(404).json({
          errors: {
            0: {
              msg: 'Captcha error.',
              param: 'Failed verification',
            },
          },
          success: false,
        });
      }
      // If successful
      // return res.json({ captchasuccess: true, msg: 'Captcha passed' });
      return true;
    });
  },
};
