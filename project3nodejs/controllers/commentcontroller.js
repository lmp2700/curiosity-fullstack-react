const express = require('express');
const router = express.Router();
const Comments = require('../models/commentmodel');

// get “/comment” => “controller#index” 
// # Shows all instances of your model
router.get('/', async(req, res) => {
    try {
        const allComments = await Comments.find();
        console.log(allComments)
        res.json({
            status: 200,
            comments: allComments
          });
            // res.render('/comments/index.ejs', {
            //     comments: allComments
        // })
    } catch (err) {
        res.send(err)
    }
})

// get “/comment/new” => “controller#new” 
// # Shows form to create new instance
router.get('/new', async(req, res) => {
    try {
        const newComments = await Comments.find();
        res.json({
            status: 200,
            comments: newComments
          });
            // res.render('/comments/new.ejs', {
            //     comments: newComments
            // })
    } catch(err) {
        res.send(err)
    }
})

// post “/comment“ => “controller#create” 
// # Creates new instance from new form
router.post('/', async(req, res) => {
    try {
        console.log(req.body, ' this is req.body');
        const newComment = await Comments.create(req.body)
        console.log('Hello?')
        res.json({
            status: 200,
            comment: newComment
          });
    } catch(err) {
        console.log(err);
        res.send(err)
    }
})

// get “/comment/:id” => “controller#show” 
// # Shows individual instance (id#)
router.get('/:id', async(req, res) => {
    try {
        const showComments = await Comments.findOne(req.params.id, req.body)
        res.json({
            status: 200,
            comments: showComments
          });
        // res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})


// get “/comment/:id/edit” => “controller#edit” 
// # Shows form to edit specific instance
router.get('/:id/edit', async(req, res) => {
    try {
        const editComment = await Comments.findOne(req.params.id, req.body, {new: true})
        res.json({
            status: 200,
            comments: editComment
          });
        // res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})

// patch “/comment/:id” => “controller#update” 
// # Updates instance from Edit form
router.put('/:id', async(req, res) => {
    try {
        const updateComment = await Comments.findOneAndUpdate(req.params.id)
        res.json({
            status: 200,
            comments: updateComment
          });
        // res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})

// delete “/comment/:id” => “controller#destroy” 
// # Removes instance from database
router.delete('/:id', async(req, res) => {
    try {
        const deleteComment = await Comments.findByIdAndRemove(req.params.id)
        res.json({
            status: 200,
            comment: deleteComment
          });
        // res.redirect('/comments')
    } catch(err) {
        res.send(err)
    }
})


module.exports = router;