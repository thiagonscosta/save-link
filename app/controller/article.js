const cheerio = require('cheerio');
const fetch = require('node-fetch');
const Article = require('../model/article');
const Folder = require('../model/folder');

exports.create = async (req, res) => {
  const html = await fetch(req.body.url).then((resp) => resp.text());
  const $ = cheerio.load(html);

  const article = new Article({
    url: req.body.url,
    title: $('meta[name="title"]').attr('content') || null,
    description: $('meta[name="description"]').attr('content') || null,
    image: $('meta[property="og:image"]').attr('content') || null,
  });

  article.save()
    .then((data) => {
      res.status(200)
        .json({
          message: 'Save successfully',
          article: data,
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: 'Fail!',
        error: error.message,
      });
    });

  if (req.params.folderId) {
    const fId = req.params.folderId;
    Folder.findByIdAndUpdate(fId, { $push: { articles: article.id } }, { new: true });
  }
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

exports.deleteAll = (req, res) => {
  Article.deleteMany({})
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
