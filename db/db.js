const mongoose = require('mongoose')
const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/photosdb";

// create db and connect
mongoose.connect(mongoUri, {useNewUrlParser: true})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});