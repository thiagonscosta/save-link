require('dotenv').config();

module.exports = {
  url: `mongodb+srv://savelink:${process.env.DB_PASSWORD}@cluster0.8vcmp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
};
