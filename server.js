const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session')
const path = require('path');
require('dotenv').config();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// models here
require('./db/db')
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

// const controllers here
const commentsController = require('./controllers/commentcontroller')
const authController = require('./controllers/authcontroller')

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(cors({
  origin: process.env.REACT_APP_ADDRESS,
  credentials: true,
  optionsSuccessStatus: 200
}))

app.get('/', (req, res) => {
  console.log('hi')
  res.render('index.ejs')
})

// app.use controllers here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/vi/comments', commentsController, router)
app.use('/api/vi/auth', authController);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('listening on port 3000');
});