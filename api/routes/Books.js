const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET to /books'
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'POST  /books'
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
