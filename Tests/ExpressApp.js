const express = require('express');
const bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

//This piece of middleware will log the requests
app.use('/', function(req, res, next){
  console.log('Request: ' + req.url);
  next();
});

//Requesting static files:
//Whenever the req.url starts with '/assets' this piece of middleware will
//serve the requested file
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index');
});
app.get('/home', function(req, res){
  res.render('index');
});
app.get('/favicon.ico', function(req, res){
  res.sendFile(__dirname + '/assets/favicon.ico');
});

//Forwarding the name to a template
app.get('/profile/:name', function(req, res){
  var data = {age: 21, hobbies: ['gaming', 'sleeping', 'Golf']}
  res.render('profile', {person: req.params.name, data: data});
});

// Dynamic Routing for every other URL (eg. Impressum and Contact)
// If a query is attached it is transfered as well
app.get('/:file', function(req, res){
  res.render(req.params.file, {query: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log('Posted: ');
  console.log(req.body);
  res.render('contact_success', {data: req.body});
});

app.listen(3000);
