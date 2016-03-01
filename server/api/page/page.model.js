'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var PageSchema = new mongoose.Schema({
  image: String,
  text: String,
  pageNum: Number
});

export default mongoose.model('Page', PageSchema);
