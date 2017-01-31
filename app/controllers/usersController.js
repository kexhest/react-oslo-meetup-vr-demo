'use strict';

const users = require('../models/users');

function index(req, res) {
  res.status(501)
    .json({
      error: {
        message: 'No you don\'t.',
      },
    });
}

function me(req, res) {
  res.status(200)
    .json({
      token: req.token,
      user: req.user,
    });
}

function show(req, res) {
  const user = users.findBy('id', req.body.id);

  if (user) {
    res.status(200)
      .json({ user });
  } else {
    res.status(404)
      .json({
        error: {
          message: 'Couldn\'t find what you\'re looking for.',
        },
      });
  }
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
  res.status(501)
    .json({
      error: {
        message: 'No you don\'t.',
      },
    });
}

function destroy(req, res) {
  res.status(501)
    .json({
      error: {
        message: 'No you don\'t.',
      },
    });
}

module.exports = {
  index,
  me,
  show,
  update,
  create,
  destroy,
};
