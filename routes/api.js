var express = require('express')

route = express.Router();

route.get('/',function(req,res){
  console.log(req);
  res.json({message:'API Works',query:req.query,body:req.body})
})

route.post('/',function(req,res){
  console.log(req);
  res.json({message:'API Works',query:req.query,body:req.body})
})

module.exports = route;
