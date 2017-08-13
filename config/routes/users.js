const controller = require('../../app/controllers/users');

module.exports = [
  { method: 'GET', path: '/users', handler: controller.index },
  { method: 'GET', path: '/users/{id}', handler: controller.show },
];
