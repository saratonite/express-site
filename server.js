var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var nunjucks = require('nunjucks');
var app = express();
var session = require('express-session');
var cookieParser = require('cookie-parser')

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


// Express session setup
app.use(cookieParser('verysecret'))

app.use(session({
  resave:false,
  secret: 'verysecret',
  saveUninitialized: true,
  cookie: { secure: !true }
}))

// Mongoose 

var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://localhost:27017/tools_db';
mongoose.connect(mongoDB);

//Get the default connection
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('MongoDB Connected');
});



app.get('/feedback',function(req,res){

  //console.log(req);
  //res.sendFile(path.join(__dirname,'publice')+'/index.html');
  res.render('feedback.html')

})

app.post('/feedback',function(req,res){

  // Validate 

  var validator = require('validator')

    var errors = [];

    console.log(req.body)

    if(validator.isEmpty(req.body.name.trim())){
      errors.push('Name field required');
    }

    if(!validator.isEmail(req.body.email)){
        errors.push('Invalid email');
    }

    if(errors.length) {
        res.status(422).json({message:"Validation errors",errors:errors});
        return;
    }

   var Feedback = require('./models/feedback');

   var feedback = new Feedback(req.body);

    feedback.save(function(err){

      if(err) res.status(500).json({message:"Error"})

      res.json({message:'success'});

    })

  console.log(req.body);
  //res.send('Thank you '+req.body.name);
  //res.status(200).json(req.body);

});

app.get('echo',function(req,res){
  res.send('Hello World');
});

/* API Routes */

app.use('/api',require('./routes/api'))
app.use('/api/todos',require('./routes/api/todos'));
app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'));

app.get('*',function(req,res){

  res.render('home.html')
})

app.listen(port,function(){
  console.log('Server listening on port'+ port)
});
