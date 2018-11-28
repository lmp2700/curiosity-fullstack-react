const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session')

port = process.env.PORT || 3000;

// models here

require('./db/db')
app.use(session({
  secret: 'nathan fillion',
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

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  console.log('hi')
  res.render('index.ejs')
})

// app.use controllers here
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/comments', commentsController, router)
app.use('/auth', authController);

var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/grocery_app_dev';
mongoose.connect(mongoUri);


app.listen(port);
console.log('---------------------------------');
console.log('Server running on port: ' + port);
console.log('---------------------------------');
// app.listen(process.env.PORT || 9000, () => {
//   console.log('listening on port 9000');
// });