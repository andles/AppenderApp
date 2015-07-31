var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var passport = require('passport'); 
require('../config/passport.js')(passport); 
var request = require('request');
var addressCtrl = require('../controllers/addressCtrl');
var googleCtrl = require('../controllers/googleCtrl');
var requestCtrl = require('../controllers/requestCtrl');
var User = require('../models/user');

function isLoggedIn(req, res, next){
  if(req.isAuthenticated())
    return next();
  res.redirect('/#/login');
};

  app.get('/api/contacts', isLoggedIn, function(req, res){
    var email = req.user.google.email;
    var token = req.user.google.token;
    request
      .get("https://www.google.com/m8/feeds/contacts/"+email+"/full?alt=json&access_token="+token+"&max-results=1000&v=3.0", 
        // .get("https://www.google.com/m8/feeds/contacts/"+email+"/full/35ee58b88d11b2d?access_token="+token,
        function(error, response, body){
        if(error){
          res.status(500).json(error)
        } else {
          // console.log(JSON.parse(response.body));
          // res.send(response.body);
          res.json(JSON.parse(response.body));
        }
      })
    });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/#/login');
  });
  
  app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.google.com/m8/feeds']}))
  
  app.get('/auth/google/callback', passport.authenticate('google', {
      successRedirect: '/#/home',
      failureRedirect: '/#/login'
    }));
  app.get('/api/getuser', isLoggedIn, requestCtrl.getUser);
  app.get('/api/mongoosecontacts', isLoggedIn, requestCtrl.getmongoosecontacts);
  app.post('/api/postcontacts', isLoggedIn, requestCtrl.postContactsToMongoose);
  // app.post('/api/updatecontact', googleCtrl.updatePost);
  app.put('/api/updateaddress', requestCtrl.updateaddress)
  app.delete('/api/deletecontact', googleCtrl.deletePost);
  app.post('/api/getrequestinfo', requestCtrl.getrequestinfo);
  app.post('/api/addressreq', isLoggedIn, requestCtrl.create);
  app.get('/api/getrequests/', isLoggedIn, requestCtrl.getRequests);
  app.post('/api/request', isLoggedIn, requestCtrl.deleterequest);

}