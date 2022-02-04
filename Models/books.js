var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    name: String,
    author: String
})

module.exports = mongoose.model("books",bookSchema)