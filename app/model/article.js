const mongoose = require('mongoose');

const schema = mongoose.Schema({
  url: {
    type: String,
  },
});

module.exports = mongoose.model('Article', schema);
