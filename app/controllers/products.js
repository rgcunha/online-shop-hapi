const Product = require('../models/product');

const index = (request, reply) => {
  Product.find((error, products) => {
    if (error) {
      console.error(error);
    }
    return reply({ data: products });
  });
};

const show = (request, reply) => {
  reply(`Product:  ${encodeURIComponent(request.params.id)}!`);
};

module.exports = {
  index,
  show,
};
