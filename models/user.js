var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true }

});



UserSchema.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, 10);
};

UserSchema.methods.isValidPassword = function( password ) {
    return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model('User',UserSchema);

module.exports = User;