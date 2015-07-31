var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('../models/user');
var configAuth = require('./auth');
var Contacts = require('../models/contacts');


module.exports = function(passport){

	passport.serializeUser(function(user, done){
        // console.log(11111, user)
		done(null, user.id);
	});
	passport.deserializeUser(function(id, done){
        // console.log(22222, id)
		User.findById(id, function(err, user){
            // console.log(33333, user)
			done(err, user);
		});
	})

	passport.use(new GoogleStrategy({
			clientID: configAuth.googleAuth.clientID,
			clientSecret: configAuth.googleAuth.clientSecret, 
			callbackURL: configAuth.googleAuth.callbackURL
		},

	function(token, refreshToken, profile, done) {
        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        process.nextTick(function() {
            // try to find the user based on their google id
            User.findOne({ 'google.id' : profile.id }, function(err, user) {
                if (err)
                    return done(err);

                if (user) {
                    // if a user is found, log them in
                    // User.findByIdAndupdate(profile.id, )
                    user.google.token = token;
                    user.save(function(err){
                        if(err){
                            console.log('token did not update');
                            return done(null, user);
                        } else {
                            return done(null, user);
                        };
                    });
                } else {
                    // if the user isnt in our database, create a new user
                    var newUser          = new User();

                    // set all of the relevant information
                    // console.log(profile);
                    newUser.google.id    = profile.id;
                    newUser.google.token = token;
                    newUser.google.name  = profile.displayName;
                    newUser.google.email = profile.emails[0].value; // pull the first email

                    // save the user
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    });
                }
            });
        });

    }));

};
