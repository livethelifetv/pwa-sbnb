// Initializes the `pwa` service on path `/pwa`
const { Pwa } = require('./pwa.class');
const createModel = require('../../models/pwa.model');
const hooks = require('./pwa.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/pwa', new Pwa(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('pwa');

  service.hooks(hooks);
};
