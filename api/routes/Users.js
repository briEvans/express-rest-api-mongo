const path = require('path');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require(path.resolve('api/models/user'));

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'GET to /users'
  });
});

router.post('/create', (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name || 'null',
    email: req.body.email || 'null',
    role: req.body.role || 'null',
    pw: req.body.pass || 'abc123'
  });

  user.save().then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));

  res.status(201).json({
    message: 'POST  /users',
    newUser: user
  });
});

router.post('/signin', (req, res) => {
  const user = {
    id: '1',
    name: 'name',
    email: 'email',
    role: 'role',
    pw: 'pass'
  }

  res.status(201).json({
    message: 'signing in a user'
  });
});

router.get('/:userID', (req, res) => {
  const id = req.params.userID | null;

  User.findById(id)
    .exec()
    .then(user => {
      console.log(user);
      res.status(200).json({
        message: 'Retrieved user, ' + id,
        user: user
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500)
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
