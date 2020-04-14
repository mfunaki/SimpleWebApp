var express = require("express");
var app = express();

const PORT = process.env.PORT || 3000;

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

console.log(`Listening on port ${ PORT }.`);
module.exports = app.listen(PORT);