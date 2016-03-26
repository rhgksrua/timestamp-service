// server.js

var express = require('express');
var morgan = require('morgan');
var toTimeObj = require('./converter/toTimeObj');

var app = express();

var port = process.env.PORT || 8000;

app.use(express.static(__dirname + '/public'));

app.use(morgan('combined'));

app.set('views', __dirname + '/templates');
app.set('view engine', 'jade');

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.get('/', function(req, res) {
    var url = req.protocol + "://" + req.get('host');
    res.render('index', {host: url});
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