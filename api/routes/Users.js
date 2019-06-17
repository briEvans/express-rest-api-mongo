const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET to /users'
  });
});

router.post('/', (req, res) => {
  const user = {
    id: '1',
    name: 'name',
    email: 'email',
    role: 'role',
    pw: 'pass'
  }

  res.status(201).json({
    message: 'POST  /users'
  });
});

router.get('/:userID', (req, res) => {
  const id = req.params.userID | null;

  res.status(200).json({
    message: 'Retrieved user, ' + id,
    id: id
  });
});

router.patch('/:userID', (req, res) => {
  const id = req.params.userID | null;

  res.status(200).json({
    message: 'Update' + id,
    id: id
  });
});

router.delete('/:userID', (req, res) => {
  const id = req.params.userID | null;

  res.status(200).json({
    message: 'Delete' + id,
    id: id
  });
});

module.exports = router;
