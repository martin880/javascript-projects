/* eslint-disable linebreak-style */
const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    // eslint-disable-next-line no-undef
    handler: addNoteHandler,
  },
];

module.exports = routes;
