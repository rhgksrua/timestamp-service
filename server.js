// server.js

var express = require('express');
var app = express();
var toTimeObj = require('./converter/toTimeObj');

var port = process.env.PORT || 8000;

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.get('/', function(req, res) {
    res.end('time stamp service');
});

app.get('/:time', function(req, res) {
    var date,
        timeInput = req.params.time;
        
    if (isNaN(+timeInput)) {
        date = new Date(req.params.time);
    } else {
        date = new Date(+req.params.time);
    }
    
    res.json(toTimeObj(date));
});

app.listen(port, function() {
    console.log('running on port: ' + port);
})