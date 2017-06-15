var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var nunjucks = require('nunjucks');
var app = express();

var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackConfig = require('./webpack.config');


var port = process.env.PORT || 8080;

// Webpack middleware setup

var compiler = webpack(webpackConfig);


	app.use(require('webpack-dev-middleware')(compiler,{
	  noInfo:true,
	  publicPath:"/assets"
	}));

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

/* API Routes */

app.use('/api',require('./routes/api'))

app.listen(port,function(){
  console.log('Server listening on port'+ port)
});
