const Folder = require('../model/folder');

exports.createFolder = (req, res) => {
  const folder = new Folder({ name: req.body.name });
  folder.save()
    .then((data) => {
      res.status(201).json({
        message: 'Save successfully',
        folder: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error',
        error: err,
      });
    });
};

exports.getFolderWithArticles = (req, res) => {
  const { folderId } = req.params.folderId;
  Folder.findById(folderId)
    .then((data) => {
      res.status(200).json({
        folder: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.getFolders = (req, res) => {
  Folder.find({}, '_id, name')
    .then((data) => {
      res.status(200).json({
        folders: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};
