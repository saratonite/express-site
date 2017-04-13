const express = require('express');

const app = express();

app.get('/',function(req,res){

  console.log(req);

  res.sendFile(__dirname+'/public/index.html');

})

app.get('echo',function(req,res){
  res.send('Hello World');
});

app.listen(5050,function(){
  console.log('Server listening on port 5050')
});
