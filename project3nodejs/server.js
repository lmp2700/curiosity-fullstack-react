const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session')

// models here

require('./db/db')

// const controllers here
const Comments = require('../models/commentmodel')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cors(corsOptions));

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }
  
// app.use controllers here
app.use('/comments', Comments) 

app.use(session({
    secret: 'nathan fillion',
    resave: false,
    saveUninitialized: false
  }))

app.get('/', (req, res) => {
    console.log('hi')
    res.render('index.ejs')
})

app.listen(3000)