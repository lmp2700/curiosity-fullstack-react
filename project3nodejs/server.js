const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session')

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

// app.use controllers here
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cors(corsOptions));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions)); 

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/comments', commentsController)
app.use('/auth/login', authController);



app.get('/', (req, res) => {
    console.log('hi')
    res.render('index.ejs')
})

app.listen(9000)