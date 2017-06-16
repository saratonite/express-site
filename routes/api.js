var express = require('express')
var Feedback = require('../models/feedback');

route = express.Router();

route.get('/',function(req,res){
  console.log(req);
  res.json({message:'API Works',query:req.query,body:req.body})
})

route.post('/',function(req,res){
  console.log(req);
  res.json({message:'API Works',query:req.query,body:req.body})
})


route.get('/feedbacks',function(req,res){
  Feedback.find({},function(err,feedbacks){
    if(err) res.json({message:"Error"})

    res.json(feedbacks);
  });
});
module.exports = route;
