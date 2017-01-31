'use strict';

const jwt = require('jsonwebtoken');

const { secret } = require('../config');

const cleanUser = user => ({
  id: user.id,
  username: user.username,
  firstName: user.firstName,
  lastName: user.lastName,
});

const createToken = user =>
  jwt.sign(user, secret, { expiresIn: 60 * 60 * 24 });

module.exports = {
  cleanUser,
  createToken,
};
