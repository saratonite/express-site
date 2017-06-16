//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
    title : String,
    description:String,
    isCompleted:Boolean,
    priority: Number, // 1 - 10
    created_at: Date,
    updated_at: Date
    // Todo add user
});

var Todo = mongoose.model('Todo',TodoSchema );

module.exports = Todo;