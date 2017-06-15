var express = require('express')

var router = express.Router();

/**List todos */
router.get('/',function(req,res){

    res.json({'todos':'list'});

});

/**Create new todo */
router.post('/',function(req,res){

    res.json(req.body);
});

module.exports = router;