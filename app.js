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

app.listen(3000, () => console.log('app listening on port 3000.'));
