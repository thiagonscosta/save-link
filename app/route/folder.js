const folderController = require('../controller/folder.js');

module.exports = (app) => {
  app.post('/api/folder/create', folderController.createFolder);
  app.get('/api/folder/all', folderController.getFolders);
  app.get('/api/folder/folder/:folderId', folderController.getFolderWithArticles);
};
