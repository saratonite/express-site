var express = require('express')

route = express.Router();

route.get('/',function(req,res){
  res.json({message:'API Works'})
})

module.exports = route;
