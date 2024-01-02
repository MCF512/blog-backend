const mongoose = require('mongoose')

const CommentSchema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    content: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment