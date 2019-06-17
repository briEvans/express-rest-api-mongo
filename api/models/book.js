const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  isbn: String,
  title: String,
  author: String
});

module.exports = mongoose.model('Book', bookSchema);
