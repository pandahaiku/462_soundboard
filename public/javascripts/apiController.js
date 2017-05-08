var Users = require('../models/user');
var EventMs = require('../models/eventM');
var EventVs = require('../models/eventV');
var Venues = require('../models/venue');
var Music = require('../models/musician');
var bodyParser = require('body-parser');


module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // callback function to avoid duplicating it all over
    var callback = function (err, data) {
        if (err) { return console.error(err); }
        else { console.log(data); }}
    
    //find all with name user
    //Users.find({username: /john$/ }, callback);

    //find one with username and change email
    //Users.findOneAndUpdate({username: /JS$/ },{email: 'abc@123.com'}, callback);

    //remove all with username test - works
    //Users.remove({username: /Rmcneley$/ }, callback);

    //code to add to database using one step - works
    // Users.create({username: 'Rmcneley', password: '123', email: 'Rmcneley@csu.fullerton.edu'}, function(err, user){
    //   if(err) console.log(err);
    //   else console.log(user);
    //   });

    // app.get('/api/users/:uname', function(req, res) {      
    //     Users.find({ username: req.params.uname }, function(err, users) {
    //         if (err) throw err;      
    //         res.send(users);
    //     });      
    // });


    app.post('/api/', function(req, res) {
        
        if (req.body.id) {
            Users.findByIdAndUpdate(req.body.id, { password: req.body.password, email: req.body.email }, function(err, user) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
           
           var newUser = Users({
               username: req.body.username,
               password: req.body.password,
               email: req.body.email
           });
           // Code to save it to database
           newUser.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
        }
    });
    

    app.delete('/api/user', function(req, res) {
        
        Users.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
    app.post('/users',function(req,res){
        var user_name = req.body.user;
        var email     = req.body.email;
        var pass      = req.body.password;
        var webLink   = req.body.websiteLink;
        console.log("User name = "+user_name+", password is "+pass+", Email is = "+email+", weblink is "+webLink);
        res.end("yes");
    });  

    // //find and return all in database - works
    // Users.find(function (err, users) {
    //     if (err) return console.error(err);
    //     console.log(users)
    //     });

}