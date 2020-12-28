const Article = require('../model/article');

exports.create = async (req, res) => {
  const article = new Article({ url: req.body.url });
  article.save()
    .then((data) => {
      res.status(200).json({
        message: 'Save successfully',
        article: data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Fail!',
        error: err.message,
      });
    });
};

exports.getAll = (req, res) => {
  Article.find({})
    .then((articles) => {
      res.status(200).json({
        articles,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error',
        error: err,
      });
    });
};

exports.getOne = (req, res) => {
  Article.findById(req.params.id)
    .then((article) => {
      res.status(200).json({
        article,
      });
    });
};

exports.deleteArticle = (req, res) => {
  Article.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200);
    })
    .catch((err) => {
      res.status(500).json({
        message: 'Error',
        error: err,
      });
    });
};
