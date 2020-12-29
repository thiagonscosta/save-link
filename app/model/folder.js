const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
  },
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Article',
    },
  ],
});

module.exports = mongoose.model('Folder', schema);
