const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  username: String,
  tag: String,
  url: String,
  description: String
})

module.exports = mongoose.model('Photo', photoSchema)