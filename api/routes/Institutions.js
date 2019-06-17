const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET to /institutions'
  });
});

router.post('/create', (req, res) => {
  const institution = {
    id: req.body.id,
    url: req.body.url,
    email: req.body.email
  };

  res.status(201).json({
    message: 'POST  /institutions',
    institution: institution
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
