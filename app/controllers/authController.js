'use strict';

const users = require('../models/users');
const { createToken } = require('../utils');

function index(req, res) {
  res.status(501)
    .json({
      error: {
        message: 'No you don\'t.',
      },
    });
}

function show(req, res) {
  res.status(501)
    .json({
      error: {
        message: 'No you don\'t.',
      },
    });
}

function update(req, res) {
  res.status(501)
    .json({
      error: {
        message: 'No you don\'t.',
      },
    });
}

function create(req, res) {
  const user = users.findBy('password', req.body.password);

  if (user) {
    res.status(201)
      .json({
        token: createToken(user),
        user,
      });
  } else {
    res.status(401)
      .json({
        error: {
          message: 'Nope!',
        },
      });
  }
}

function destroy(req, res) {
  res.status(200)
    .json({
      message: 'success',
    });
}

module.exports = {
  index,
  show,
  update,
  create,
  destroy,
};
