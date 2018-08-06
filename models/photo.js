const mongoose = require('mongoose');

const photoSchema = mongoose.Schema({
  username: String,
  tag: String
})

module.exports = mongoose.model('Photo', photoSchema)