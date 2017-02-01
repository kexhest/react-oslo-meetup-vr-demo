require('es6-promise').polyfill();
require('whatwg-fetch');

require('./styles/main.scss');
require('./scripts/index');

const offline = require('offline-plugin/runtime');

if (process.env.NODE_ENV === 'production') {
  offline.install();
}
