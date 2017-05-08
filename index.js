var express = require('express');
var router = express.Router();
var soundFile = require('../models/sound');
var fs = require('fs');
var path = require('path');
var mongodb = require('mongodb');
var name;
var audio1 = path.join(__dirname, 'audio/audio1.wav');
var audio2 = path.join(__dirname, 'audio/audio2.wav');
var audio3 = path.join(__dirname, 'audio/audio3.wav');
var audio4 = path.join(__dirname, 'audio/audio4.wav');
var audio5 = path.join(__dirname, 'audio/audio5.wav');
var audio6 = path.join(__dirname, 'audio/audio6.wav');
var audio7 = path.join(__dirname, 'audio/audio7.wav');
var audio8 = path.join(__dirname, 'audio/audio8.wav');
var audio9 = path.join(__dirname, 'audio/audio9.wav');
var audio10 = path.join(__dirname, 'audio/audio10.wav');
var audio11 = path.join(__dirname, 'audio/audio11.wav');
var audio12 = path.join(__dirname, 'audio/audio12.wav');
var audio13 = path.join(__dirname, 'audio/audio13.wav');
var audio14 = path.join(__dirname, 'audio/audio14.wav');
var audio15 = path.join(__dirname, 'audio/audio15.wav');
var audio16 = path.join(__dirname, 'audio/audio16.wav');

var isAuthenticated = function(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport) {

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', {
            message: req.flash('message')
        });
    });

    router.get('/login', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('login', {
            message: req.flash('message')
        });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/initsoundboard',
        failureRedirect: '/login',
        failureFlash: true
    }));

    router.post('/SbAdd', isAuthenticated, function(req, res) {
        var number = req.body.tnum;
        var query = "soundfile" + number;
        var file = fs.readFileSync('public/temp.wav');
        fs.renameSync('public/temp.wav', './routes/audio/audio' + number + '.wav')
        var sound = soundFile({
            username: req.user.username,
            [query]: file
        });
        soundFile.findOneAndUpdate({
            username: req.user.username
        }, {
            [query]: file
        }, {
            upsert: true
        }, function(err, doc) {
            if (err) throw err;
        });
        console.log('\nSuccessfully saved to the Database\n');
        res.redirect('/soundboard');
    });

    router.post('/soundboard', function(req, res) {
        req.pipe(fs.createWriteStream('public/temp.wav'))
            .on('error', (e) => res.status(500).end(e.message))
            .on('close', () => res.end('File saved'))
    });

    /* GET Registration Page */
    router.get('/signup', function(req, res) {
        res.render('register', {
            message: req.flash('message')
        });
    });


    /* GET Soundboard page */
    router.get('/soundboard', isAuthenticated, function(req, res) {
        res.render('Soundboard', {
            user: req.user
        });

    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/initialize',
        failureRedirect: '/signup',
        failureFlash: true
    }));


    router.get('/initialize', isAuthenticated, function(req, res) {
        //add message like "LOADING" or "INITIALIZING"
        var blankfile = fs.readFileSync('public/Silent.wav');
        soundFile.findOneAndUpdate({
            username: req.user.username
        }, {
            soundfile1: blankfile,
            soundfile2: blankfile,
            soundfile3: blankfile,
            soundfile4: blankfile,
            soundfile5: blankfile,
            soundfile6: blankfile,
            soundfile7: blankfile,
            soundfile8: blankfile,
            soundfile9: blankfile,
            soundfile10: blankfile,
            soundfile11: blankfile,
            soundfile12: blankfile,
            soundfile13: blankfile,
            soundfile14: blankfile,
            soundfile15: blankfile,
            soundfile16: blankfile,
        }, {
            upsert: true
        }, function(err, doc) {
            if (err) throw err;
            console.log('\nSuccessfully saved to the Database\n');
        })
        res.redirect('/initsoundboard');
    })

    router.get('/initsoundboard', isAuthenticated, function(req, res) {
        soundFile.findOne({
            username: req.user.username,
        }, function(err, soundRetrieved) {
            if (err) return handleError(err);
            console.log(soundRetrieved.username, 'success');
            //write file 1
            fs.writeFile('./routes/audio/audio1.wav',
                soundRetrieved.soundfile1,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 1 Saved Successfully.\n');
                });
            //end of write 1
            //write file 2
            fs.writeFile('./routes/audio/audio2.wav',
                soundRetrieved.soundfile2,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 2 Saved Successfully.\n');
                });
            //end of write 2
            //write file 3
            fs.writeFile('./routes/audio/audio3.wav',
                soundRetrieved.soundfile3,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 3 Saved Successfully.\n');
                });
            //end of write 3
            //write file 4
            fs.writeFile('./routes/audio/audio4.wav',
                soundRetrieved.soundfile4,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 4 Saved Successfully.\n');
                });
            //end of write 4
            //write file 5
            fs.writeFile('./routes/audio/audio5.wav',
                soundRetrieved.soundfile5,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 5 Saved Successfully.\n');
                });
            //end of write 5
            //write file 6
            fs.writeFile('./routes/audio/audio6.wav',
                soundRetrieved.soundfile6,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 6 Saved Successfully.\n');
                });
            //end of write 6
            //write file 7
            fs.writeFile('./routes/audio/audio7.wav',
                soundRetrieved.soundfile7,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 7 Saved Successfully.\n');
                });
            //end of write 7
            //write file 8
            fs.writeFile('./routes/audio/audio8.wav',
                soundRetrieved.soundfile8,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 8 Saved Successfully.\n');
                });
            //end of write 8
            //write file 9
            fs.writeFile('./routes/audio/audio9.wav',
                soundRetrieved.soundfile9,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 9 Saved Successfully.\n');
                });
            //end of write 9
            //write file 10
            fs.writeFile('./routes/audio/audio10.wav',
                soundRetrieved.soundfile10,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 10 Saved Successfully.\n');
                });
            //end of write 10
            //write file 11
            fs.writeFile('./routes/audio/audio11.wav',
                soundRetrieved.soundfile11,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 11 Saved Successfully.\n');
                });
            //end of write 11
            //write file 12
            fs.writeFile('./routes/audio/audio12.wav',
                soundRetrieved.soundfile12,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 12 Saved Successfully.\n');
                });
            //end of write 12
            //write file 13
            fs.writeFile('./routes/audio/audio13.wav',
                soundRetrieved.soundfile13,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 13 Saved Successfully.\n');
                });
            //end of write 13
            //write file 14
            fs.writeFile('./routes/audio/audio14.wav',
                soundRetrieved.soundfile14,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 14 Saved Successfully.\n');
                });
            //end of write 14
            //write file 15
            fs.writeFile('./routes/audio/audio15.wav',
                soundRetrieved.soundfile15,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 15 Saved Successfully.\n');
                });
            //end of write 15
            //write file 16
            fs.writeFile('./routes/audio/audio16.wav',
                soundRetrieved.soundfile16,
                function(err) {
                    if (err) throw err;
                    console.log('\nFile 16 Saved Successfully.\n');
                });
            //end of write 16*/
        })
        res.redirect('/soundboard');
    });


    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res) {
        res.render('home', {
            user: req.user
        });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    router.get('/audio1', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio1);
        readStream.pipe(res);
    });

    router.get('/audio2', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio2);
        readStream.pipe(res);
    });

    router.get('/audio3', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio3);
        readStream.pipe(res);
    });

    router.get('/audio4', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio4);
        readStream.pipe(res);
    });

    router.get('/audio5', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio5);
        readStream.pipe(res);
    });

    router.get('/audio6', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio6);
        readStream.pipe(res);
    });

    router.get('/audio7', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio7);
        readStream.pipe(res);
    });

    router.get('/audio8', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio8);
        readStream.pipe(res);
    });

    router.get('/audio9', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio9);
        readStream.pipe(res);
    });

    router.get('/audio10', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio10);
        readStream.pipe(res);
    });

    router.get('/audio11', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio11);
        readStream.pipe(res);
    });

    router.get('/audio12', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio12);
        readStream.pipe(res);
    });

    router.get('/audio13', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio13);
        readStream.pipe(res);
    });

    router.get('/audio14', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio14);
        readStream.pipe(res);
    });

    router.get('/audio15', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio15);
        readStream.pipe(res);
    });

    router.get('/audio16', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio16);
        readStream.pipe(res);
    });

    return router;
}