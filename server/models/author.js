const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({  //dont need to define id because mongoDB does it for us
    name: String,
    age: Number
})

module.exports = mongoose.model('Author', authorSchema);