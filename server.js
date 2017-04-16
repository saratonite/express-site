const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();

/* Express static middleware */
app.use(express.static(path.join(__dirname,'public')))

/* Body parser middleware */
app.use(bodyParser.urlencoded());

/* TODO : Integrate template engine */

app.get('/',function(req,res){

  console.log(req);
  res.sendFile(path.join(__dirname,'publice')+'/index.html');

})

app.post('/contact',function(req,res){

  console.log(req.body);
  //res.send('Thank you '+req.body.name);
  res.status(200).json(req.body);

});

app.get('echo',function(req,res){
  res.send('Hello World');
});

app.listen(5050,function(){
  console.log('Server listening on port 5050')
});
