const Hapi = require('hapi');

require('./config/database');
const logger = require('./config/logger');
const routes = require('./config/routes/index');

const server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.route(routes);

server.register(logger, (err) => {
  if (err) {
    throw err; // something bad happened loading the plugin
  }
  server.start((error) => {
    if (error) {
      throw error;
    }
    console.log(`Server running at: ${server.info.uri}`);
  });
});

module.exports = server;
