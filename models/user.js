const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
})

module.export = mongoose.model('User', UserSchema);