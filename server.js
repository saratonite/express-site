const express = require('express');
const bodyParser = require('body-parser');
const app = express();

/* Body parser middleware */
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){

  console.log(req);

  res.sendFile(__dirname+'/public/index.html');

})

app.post('/contact',function(req,res){

  console.log(req.body);
  res.send('Thank you '+req.body.name);

});

app.get('echo',function(req,res){
  res.send('Hello World');
});

app.listen(5050,function(){
  console.log('Server listening on port 5050')
});
