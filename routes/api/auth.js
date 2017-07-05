var express = require('express')
var bcrypt = require('bcrypt')
var authController = require('../../controllers/api/auth.controller');
var route = express.Router();


route.post('/',authController.check);

module.exports = route;