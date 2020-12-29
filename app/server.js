const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const mongoose = require('mongoose');
const dbConfig = require('./config/mongodb.config');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB');
  }).catch((err) => {
    console.log('Could not connect to MongoDB', err);
    process.exit();
  });

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 9090;

require('./route/article')(app);
require('./route/folder')(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
