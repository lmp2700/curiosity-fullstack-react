const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// models here

require('./db/db')

// const controllers here
const Comments = require('../models/commentmodel')

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// app.use controllers here
app.use('/comments', Comments) 

app.get('/', (req, res) => {
    console.log('hi')
    res.render('index.ejs')
})

app.listen(3000)