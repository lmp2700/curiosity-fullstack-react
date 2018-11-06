const express = require('express');
const Router = express.Router();
const Comments = require('../models/commentmodel');

// get “/comment” => “controller#index” 
// # Shows all instances of your model
router.get('/', async(res, req) => {
    try {
        const allComments = await Comments.find();
        console.log(allComments)
            res.render('/comments/index.ejs', {
                comments: allComments
        })
    } catch (err) {
        res.send(err)
    }
})

// get “/comment/new” => “controller#new” 
// # Shows form to create new instance
router.get('/new', async(req, res) => {
    try {
        const newComments = await Comments.find();
            res.render('/comments/new.ejs', {
                comments: newComments
            })
    } catch(err) {
        res.send(err)
    }
})

// post “/comment“ => “controller#create” 
// # Creates new instance from new form
router.post('/', async(req, res) => {
    try {
        const newComment = await Comment.create(req.body)
        res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})

// get “/comment/:id” => “controller#show” 
// # Shows individual instance (id#)
router.get('/:id', async(req, res) => {
    try {
        const showComments = await Comments.findOne(req.params.id, req.body)
        res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})


// get “/comment/:id/edit” => “controller#edit” 
// # Shows form to edit specific instance
router.get('/:id/edit', async(req, res) => {
    try {
        const editComment = await Comments.findOne(req.params.id, req.body)
        res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})

// patch “/comment/:id” => “controller#update” 
// # Updates instance from Edit form
router.put('/:id', async(req, res) => {
    try {
        const updateComment = await Comments.findOneAndUpdate(req.params.id)
        res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})

// delete “/comment/:id” => “controller#destroy” 
// # Removes instance from database
router.delete('/:id', async(req, res) => {
    try {
        const deleteComment = await Comments.findById(req.params.id)
        res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})


module.exports = router;