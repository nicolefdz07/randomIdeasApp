const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add some text']
    },
    tag: {
        type: String
    },
    username: {
        type: String,
        required: [true, 'Please add username']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Idea', IdeaSchema);