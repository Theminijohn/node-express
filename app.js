var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Router
// http://expressjs.com/4x/api.html#router
var router = express.Router();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/hi', function(req, res){
  var message = [
    "<h1>Hello, Express</h1>",
    "<p> Welcome to Building Web Apps in Node.js with Express. </p>",
    "<p> You'll love Express! </p>"
  ].join('\n');

  res.send(message);
});

// app.get('/users/:userId', function(req, res) {
//   res.send( "<h1> Hello, User #" + req.params.userId + "!");
// });

app.post('/users', function(req, res) {
  res.send("Creating a new user with the name " + req.body.username + ".");
});



app.get(/\/users\/(\d*)\/?(edit)/, function(){
  var message = "User #" + req.params[0] + "'s profile";
  if (req.params[1] === 'edit') {
    message = "Editing " + message;
  } else {
    message = "Viewing " + message
  }
  res.send(message);
});


app.listen(3000);