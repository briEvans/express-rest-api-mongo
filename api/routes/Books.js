const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Book = require(path.resolve('api/models/book'));


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET to /books'
  });
});

router.post('/create', (req, res) => {
  const book = new Book({
    id: new mongoose.Types.ObjectId(),
    isbn: req.body.isbn || null,
    title: req.body.title || null,
    author: req.body.author || null
  });

  book.save().then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));

  res.status(201).json({
    message: 'POST  /books',
    book: book
  });
});

router.get('/:bookID', (req, res) => {
  const id = req.params.bookID | null;

  res.status(200).json({
    message: 'Retrieved book, ' + id,
    id: id
  });
});

router.patch('/:bookID', (req, res) => {
  const id = req.params.bookID | null;

  res.status(200).json({
    message: 'Update' + id,
    id: id
  });
});

router.delete('/:bookID', (req, res) => {
  const id = req.params.bookID | null;

  res.status(200).json({
    message: 'Delete' + id,
    id: id
  });
});

module.exports = router;
