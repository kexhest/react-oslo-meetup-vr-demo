'use strict';

const express = require('express');

function server(app, root) {
  app.use(express.static(root, { maxage: 31557600 }));

  app.use((req, res, next) => {
    if (req.method === 'GET' && req.accepts('html')) {
      res.header('Cache-Control', 'max-age=60, must-revalidate, private');

      res.sendFile('index.html', { root });
    } else {
      next();
    }
  });
}

module.exports = server;
