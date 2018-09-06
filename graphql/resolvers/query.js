const { models } = require('../../models');

module.exports = {
  event (root, { id }) {
    return models.Event.findById(id);
  },
  events () {
    return models.Event.all();
  },
  user (root, { id }) {
    return models.User.findById(id);
  },
  users () {
    return models.User.all();
  },
  room (root, { id }) {
    return models.Room.findById(id);
  },
  rooms () {
    return models.Room.all();
  }
};
