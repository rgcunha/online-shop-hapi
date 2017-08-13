const Good = require('good');

const logger = {
  register: Good,
  options: {
    reporters: {
      console: [
        {
          module: 'good-squeeze',
          name: 'Squeeze',
          args: [{ response: '*', log: '*' }],
        },
        {
          module: 'good-console',
        },
        'stdout',
      ],
    },
  },
};

module.exports = logger;
