const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    _id: String, // user
    comments: String, // user comments
    photo_id: String // photo ID
})

module.exports = mongoose.model('Photos', commentSchema)