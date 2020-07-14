const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({  //dont need to define id because mongoDB does it for us
    name: String,
    genre: String,
    authorId: String
})

module.exports = mongoose.model('Book', bookSchema);