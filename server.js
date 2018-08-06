const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

require('./db/db');
app.use(session({
  secret: 'knights of the round table',
  resave: false,
  saveUninitialized: false
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));


const photoController = require('./controllers/photoController');
const authController = require('./controllers/authController');

app.use('/api/v1/photos', photoController)
app.use('auth/login', authController);

app.listen(9000, () => {
  console.log("listening on port 9000")
})