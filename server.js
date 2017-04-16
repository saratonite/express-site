var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var nunjucks = require('nunjucks');
var app = express();

/* Express static middleware */
app.use(express.static(path.join(__dirname,'public')))

/* Body parser middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set View Directory
// app.set('views','./views')
// Setting View Engine
nunjucks.configure('views', {
    autoescape: true,
    express: app
});

app.get('/',function(req,res){
  res.render('home.html')
})

app.get('/feedback',function(req,res){

  //console.log(req);
  //res.sendFile(path.join(__dirname,'publice')+'/index.html');
  res.render('feedback.html')

})

app.post('/feedback',function(req,res){

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
