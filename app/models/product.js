const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  discount: Number,
  validFrom: Date,
  validUntil: Date,
});

module.exports = mongoose.model('Product', ProductSchema);
