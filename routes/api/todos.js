var express = require('express')

var router = express.Router();

var Todo = require('../../models/todo')

/**List todos */
router.get('/',function(req,res){

    Todo.find({},function(err,todos){

        res.json(todos);

    });
    //res.json({'todos':'list'});

});

/**Create new todo */
router.post('/',function(req,res){

    // Validate request body

    var td = new Todo({title:req.body.title,description:req.body.description});
    td.save(function(err){

        if(err) res.json({message:'Error'});

        res.json({message:'Todo created'});

    });
});

module.exports = router;