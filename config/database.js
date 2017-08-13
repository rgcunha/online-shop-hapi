const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/online-shop');

const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('Connection with database succeeded.'));

module.exports = db;
