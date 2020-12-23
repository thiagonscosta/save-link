const articleController = require('../controller/article.js');

module.exports = function (app) {
  app.post('/api/article/create', articleController.create);
  app.get('/api/articles', articleController.getAll);
};
