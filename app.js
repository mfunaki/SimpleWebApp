var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res){
    res.statusCode = 200;
    res.render("index");
});

app.get('/next', function(req, res){
    res.statusCode = 200;
    res.setHeader("Content-Type", 'text/plain');
    res.end('Thank you.');
});

module.exports = app.listen(3000);