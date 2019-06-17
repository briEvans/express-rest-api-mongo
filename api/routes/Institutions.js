const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET to /institutions'
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'POST  /institutions'
  });
});

router.get('/:instID', (req, res) => {
  const id = req.params.instID | null;

  res.status(200).json({
    message: 'Retrieved institution, ' + id,
    id: id
  });
});

router.patch('/:instID', (req, res) => {
  const id = req.params.instID | null;

  res.status(200).json({
    message: 'Update' + id,
    id: id
  });
});

router.delete('/:instID', (req, res) => {
  const id = req.params.instID | null;

  res.status(200).json({
    message: 'Delete' + id,
    id: id
  });
});

module.exports = router;
