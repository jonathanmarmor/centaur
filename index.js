'use strict';

var express = require('express'),
    app = express();

module.exports = app;

function errorHandler(err, req, res, next){
    res.send(err.status || 400, err.message);
}

app.configure(function(){
    app.use(app.router);
    app.use(errorHandler);
});

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res, next){
    res.sendfile(__dirname + '/static/html/main.html');
});

app.listen(80);
