var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var feedbackScehma = new Schema({
    name:String,
    email:String,
    note:String
})

var feedback = mongoose.model('Feedback',feedbackScehma);

module.exports = feedback;