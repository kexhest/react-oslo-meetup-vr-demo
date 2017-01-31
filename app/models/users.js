'use strict';

const { users } = require('../config');
const { cleanUser } = require('../utils');

function all() {
  return users;
}

function find(id) {
  const user = users.find(usr => usr.id === id);

  return user && cleanUser(user);
}

function findBy(key, value) {
  const user = users.find(usr => usr[key] === value);

  return user && cleanUser(user);
}

module.exports = {
  all,
  find,
  findBy,
};
