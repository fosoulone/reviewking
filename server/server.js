// Set up
var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');
const bcrypt= require('bcrypt');

// Configuration
mongoose.connect('mongodb://adminReviews:adminReviews@localhost/reviewking', {
	useMongoClient: true
});

app.disable('etag');

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Models
var Review = mongoose.model('Review', {
    title: String,
    description: String,
    rating: Number
});

var User = mongoose.model('User', {
    username: String,
    password: String
});

// Routes

// Get reviews
app.get('/api/reviews', function (req, res) {

    console.log("fetching reviews");

    // use mongoose to get all reviews in the database
    Review.find(function (err, reviews) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(reviews); // return all reviews in JSON format
    });
});

app.get('/api/users', function (req, res) {

    console.log("fetching users");

    // use mongoose to get all reviews in the database
   User.find(function (err, users) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err)
            res.send(err)

        res.json(users); // return all reviews in JSON format
    });
});


// create review and send back all reviews after creation
app.post('/api/reviews', function (req, res) {

    console.log("creating review");

    // create a review, information comes from request from Ionic
    Review.create({
        title: req.body.title,
        description: req.body.description,
        rating: req.body.rating,
        done: false
    }, function (err, review) {
        if (err)
            res.send(err);

        // get and return all the reviews after you create another
        Review.find(function (err, reviews) {
            if (err)
                res.send(err)
            res.json(reviews);
        });
    });

});

app.post('/api/users', function (req, res) {
               
    // create a review, information comes from request from Ionic
    // get and return all the reviews after you create another
if (req.body.mode==1){
  User.find({username: req.body.username},function(err,results){
		if(err) res.send(err);
		if(results.length==0){
		    console.log("creating user");
		    
		   
		    bcrypt.hash(req.body.password, 10, function(err, hash) {
			    User.create({
        	                username: req.body.username,
                	        password: hash,
                       		done: false
                   	     },
                   	     function (err, user) {
                       		 if (err){ res.send(err);}
                       		 User.find({username:req.body.username}, function (error, user) {
                           		 if (err){ res.send(err)}
                           		 res.json(user);
                       		 });
                   	     });
                    });
		}
                else{
                        res.json({'status': -1});
                }

		    });

	}


if(req.body.mode==0){
  
  User.find({username: req.body.username},function(err,results){
                if(err) res.send(err);
                if(results.length==1){
                    bcrypt.compare(req.body.password,results[0].password,function(err,ress){
	                    if (err){ res.send(err)}
			    if (ress){
			        console.log("Loggin in");
                       		res.json({'status': 0});
			    }
			    else{res.json({'status':-1});}
		    });

                }

                else {
                        res.json({'status':-1});
                }
   });

}

});

// delete a review
app.delete('/api/reviews/:review_id', function (req, res) {
    Review.remove({
        _id: req.params.review_id
    }, function (err, review) {

    });
});

// listen (start app with node server.js) ======================================
app.listen(15015,'0.0.0.0');
console.log("App listening on port 15015");
