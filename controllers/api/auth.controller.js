var validator = require('validator');
var User = require('../../models/user');

var bcrypt = require('bcrypt');

function getIndex(req,res) {

    res.send('Auth index')
    
}
function postIndex(req,res) {

    res.send('Auth');
}

function check(req,res) {
    //TODO: Validate inputs

    var result = Validate(req.body)

    if(result.isValid) {

        //res.send('Valid')
        // Query database 
        User.findOne({email:req.body.email},function(err,user){

            if(err) {

                res.status(405).json({success:false,message:''})

            }

            if(bcrypt.compareSync(req.body.password,user.password)){

                // User Authentcated successfully

                // TODO: Set session
                req.session.user = user;
                user.password = null;
                delete user.password;
                res.status(200).json({success:true,message:'User authenticated',user:user});
                return;

            }
            else{

                res.status(401).json({success:false,message:'User authentication failed'});
                return;

            }

        });
    }
    else{

         res.status(422).json(result);
    }

   


    



    //bcrypt.compareSync(req.password, hash); 
}

function Validate(data) {

    var password = data.password || '',email = data.email || '';
    var errors = {};

    if(!validator.isEmail(email)) {
        errors.email = 'Invalid email';
    }

    if(validator.isEmpty(email)) {

        errors.email = 'Email field required';

    }

    if(validator.isEmpty(password)) {

        errors.password = 'Password field required';
    }

    var _errorKeys = Object.keys(errors);

    if(_errorKeys.length) {

        return { isValid: false, errors:errors };
    }

    return { isValid: true , errors: errors };
}



module.exports = {
    getIndex:getIndex,
    postIndex:postIndex,
    check:check
}