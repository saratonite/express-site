var express = require('express')
var bcrypt = require('bcrypt')

var route = express.Router();


route.get('/',function(req,res){

    res.send('Auth');
});

module.exports = route;