'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  coverImg: String,
  pages: Array
});

export default mongoose.model('Book', BookSchema);
