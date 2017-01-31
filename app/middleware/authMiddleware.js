'use strict';

const jwt = require('jsonwebtoken');
const unless = require('express-unless');
const omit = require('lodash/omit');

const { secret } = require('../config');

function validateToken() {
  const validate = (req, res, next) => {
    let token = null;

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
      token = req.headers.authorization.split(' ')[1];
    }

    jwt.verify(token, secret, (err, user) => {
      if (!err) {
        const cleanUser = omit(user, ['iat', 'exp']);

        Object.assign(req, {
          user: cleanUser,
          token: (user.exp - (Date.now() * 0.001) < 60 * 60 * 12)
            ? jwt.sign(cleanUser, secret, { expiresIn: 60 * 60 * 24 })
            : token,
        });

        return next();
      }

      return res
        .status(401)
        .json({
          error: {
            message: 'No no no, what you playing at?!.',
          },
        });
    });
  };

  validate.unless = unless;

  return validate;
}

module.exports = {
  validateToken,
};
