var express = require('express');

/*
 * body-parser is a piece of express middleware that 
 *   reads a form's input and stores it as a javascript
 *   object accessible through `req.body` 
 *
 * 'body-parser' must be installed (via `npm install --save body-parser`)
 * For more info see: https://github.com/expressjs/body-parser
 */
var bodyParser = require('body-parser');

// create our app
var app = express();
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydb');
// instruct the app to use the `bodyParser()` middleware for all routes
//app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
// set the view engine to ejs
app.set('view engine', 'ejs');
// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.

app.get('/', function(req, res) {
    var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
	 var Title = "About -Page Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

app.get('/about', function(req, res) {
      var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var title = "About -Page Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";
	var heading = "About Us";
	var content = "code of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/about', {	
               drinks : drinks,
			   Title: title,
			   Heading: heading,
			   Content: content
    });
});
app.get('/login', function(req, res) {
      var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var title = "Login  -Page";
	var heading = "Log In";
	var content = "code of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone elsecode of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/login', {	
               Title: title,
			   Heading: heading,
			   Content: content
    });
});
// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/post', function(req, res){
console.log(req.body);
  var  userName = req.body.userName;
  
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
});

app.listen(8888);