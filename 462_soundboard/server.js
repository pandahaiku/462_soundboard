// server.js

// BASE SETUP
// ==============================================
var mongoose = require('mongoose');
var config = require('./config');
var apiController = require('./controllers/apiController');
var express = require('express');
var bodyParser = require("body-parser");
var app     = express();
var port    = process.env.PORT || 3000;

// ROUTES
// ==============================================

// letting express know where the css files are
app.use(express.static('public/signup'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// sample route with a route the way we're used to seeing it
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/signup/venue_signup.html');  
});


app.post('/venuesignup',function(req,res){
  var user_name = req.body.user;
  var email     = req.body.email;
  var pass      = req.body.password;
  var webLink   = req.body.websiteLink;
  console.log("User name = "+user_name+", password is "+pass+", Email is = "+email+", weblink is "+webLink);
  res.end("yes");
});

// we'll create our routes here
mongoose.connect(config.getDbConnectionString());
apiController(app);

// START THE SERVER
// ==============================================
app.listen(port);