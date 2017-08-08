var express = require('express');
var validator = require('validator');
var bcrypt = require('bcrypt');
var User = require('../../models/user');

var route = express.Router();

/**Get users */
route.get('/',function(req,res){

    User.find({},function(err,users){

        if(err) {

            res.status(500).json({error:"Internal server error"});
            return;
        }

        res.json(users)


    })

});

/** Create a new user  */
route.post('/',function(req,res) {

    // Validate Input
    var errors = [];


    if(validator.isEmpty(req.body.email)){

        errors.push('Email required')
    }

    if(!validator.isEmail(req.body.email)) {

        errors.push('Invalid email');
    }

    if(validator.isEmpty(req.body.password)) {

        errors.push('Password field required');
    }

    // Save Data to Server

    var userObject = {email:req.body.email,password:bcrypt.hashSync(req.body.password,10)};

    if(errors.length == 0){

        User.create(userObject,function(err){

            if(err)  {
                console.log(err)
                let error = err.code == 11000 ? 'Email already exists!' : 'Unknown errror';
                res.status(428).json({message:error})
                return;
            }

            res.json({message:"Success"});
            return;

        });

        return ;

    }

    res.json({errors:errors});


    
});

module.exports = route;