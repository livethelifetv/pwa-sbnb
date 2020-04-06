const pwa = require('./pwa/pwa.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pwa);
};
