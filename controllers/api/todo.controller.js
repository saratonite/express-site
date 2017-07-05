/** Todo Controller */

var validator = require('validator'),
Todo = require('../../models/todo');



function getIndex(req,res) {

    Todo.find({}, function (err,todos) {

        res.status(200).json(todos);

    });

}


function createTodo(req,res) {

    var result = validateInput(req.body)

    if(result.isValid) {

        // Save Todo

        Todo.create(req.body,function(err,todo){
            if(err) {

                res.status.send('Server errror!!'); return;
            }

            res.status(201).json({success:true,message:'Todo created successfully',data:todo});

        })
    }
    else {
        
        res.status(422).json(result);

    }



    

}

/**
 * Create todo validator
 * @param {*Valid} data 
 */

function validateInput(data) {
    var errors = {};
    var title = data.title || '';

    var description = data.description || '';

    if(validator.isEmpty(title)) {

        errors.title = 'Todo title field required';

    }

    if(validator.isEmpty(description)) {

        errors.description = 'Description field required';
    }

    var _errorKeys = Object.keys(errors);


    if(_errorKeys.length) {
       return {isValid:false,errors:errors}
    }

    return  {isValid:true,errors:errors}
}

module.exports = {
    getIndex:getIndex,
    createTodo:createTodo
}