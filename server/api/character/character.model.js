'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CharacterSchema = new mongoose.Schema({
  name: String,
  hometown: String,
  friendname: String,
  headoption: String,
  eyesoption: String,
  mouthoption: String,
  torsooption: String,
  shirtoption: String,
  shortsoption: String,
  shoesoption: String
});

export default mongoose.model('Character', CharacterSchema);
