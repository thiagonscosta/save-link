const articleController = require('../controller/article.js');

module.exports = function (app) {
  app.post('/api/article/create/:folderId?', articleController.create);
  app.get('/api/article/all', articleController.getAll);
  app.delete('/api/article/deleteall', articleController.deleteAll);
};
