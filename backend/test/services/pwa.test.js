const assert = require('assert');
const app = require('../../src/app');

describe('\'pwa\' service', () => {
  it('registered the service', () => {
    const service = app.service('pwa');

    assert.ok(service, 'Registered the service');
  });
});
