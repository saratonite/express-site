//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title : String,
    description:String
});

var Todo = mongoose.model('Todo',TodoSchema );

module.exports = Todo;