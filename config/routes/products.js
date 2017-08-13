const controller = require('../../app/controllers/products');

const config = {
  cors: {
    origin: ['*'],
    additionalHeaders: ['cache-control', 'x-requested-with'],
  },
};

module.exports = [
  { method: 'GET', path: '/products', handler: controller.index, config },
  { method: 'GET', path: '/products/{id}', handler: controller.show },
];
