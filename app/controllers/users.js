const index = (request, reply) => {
  reply('Hello, world!');
};

const show = (request, reply) => {
  reply(`Hello user: ${encodeURIComponent(request.params.id)}!`);
};

module.exports = {
  index,
  show,
};
