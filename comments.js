// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Create an array to hold all the comments
var comments = [];

// Create a static web server
app.use(express.static('public'));

// Create a middleware to parse the body of the request
app.use(bodyParser.json());

// Create a route to get all the comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Create a route to post a comment
app.post('/comments', function(req, res) {
    var comment = req.body;
    comment.date = new Date();
    comments.push(comment);
    res.status(201).json(comment);
});

// Start listening on port 3000
app.listen(3000, function() {
    console.log('Server listening on port 3000');
});