const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: String, // user comments
    username: String // photo ID
})

module.exports = mongoose.model('Comments', commentSchema)