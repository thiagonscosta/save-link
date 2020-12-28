const mongoose = require('mongoose');

const schema = mongoose.Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Article', schema);
