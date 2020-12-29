const articleController = require('../controller/article.js');

module.exports = (app) => {
  app.post('/api/article/create/:folderId?', articleController.createArticle);
  app.get('/api/article/all', articleController.getAllArticles);
  app.delete('/api/article/deleteall', articleController.deleteAllArticles);
};
