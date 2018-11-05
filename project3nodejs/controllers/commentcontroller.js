const express = require('express');
const Router = express.Router();


// get “/comment” => “controller#index” 
// # Shows all instances of your model
router.get('/', async(res, req) => {
    try {

    } catch (err) {
        res.send(err)
    }
})

// get “/comment/new” => “controller#new” 
// # Shows form to create new instance
router.get('/new', async(req, res) => {
    try {
        
    } catch(err) {
        res.send(err)
    }
})

// post “/comment“ => “controller#create” 
// # Creates new instance from new form
router.post('/comments', async(req, res) => {
    try {

    } catch(err) {
        res.send(err)
    }
})

// get “/comment/:id” => “controller#show” 
// # Shows individual instance (id#)
router.get('/comments/:id', async(req, res) => {
    try {

    } catch(err) {
        res.send(err)
    }
})


// get “/comment/:id/edit” => “controller#edit” 
// # Shows form to edit specific instance
router.get('/comments/:id/edit', async(req, res) => {
    try {

    } catch(err) {
        res.send(err)
    }
})

// patch “/comment/:id” => “controller#update” 
// # Updates instance from Edit form
router.put('/comments/:id', async(req, res) => {
    try {

    } catch(err) {
        res.send(err)
    }
})

// delete “/comment/:id” => “controller#destroy” 
// # Removes instance from database
router.delete('/comments/:id', async(req, res) => {
    try {

    } catch(err) {
        res.send(err)
    }
})


module.exports = router;