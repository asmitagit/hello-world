var mongoose = require('mongoose')
var Video = require('../models/pages');
module.exports.controller = function(app) {

/**
 * a home page route
 */
 exports.home = function(req, res) {
//app.get('/', function(req, res) {
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
};

 exports.about = function(req, res) {
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
};

 exports.login = function(req, res) {
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
};
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


  app.get('/signup', function(req, res) {
      // any logic goes here
      res.render('users/signup')
  });

/**
 * About page route
 */
  app.get('/login', function(req, res) {
      // any logic goes here
      res.render('users/login')
  });

}
